"use client";

import React from "react";
import toast from "react-hot-toast";
import { Copy, ExternalLink } from "lucide-react";
import { orderBy } from 'lodash'
import { parseUnits } from 'ethers/lib/utils'
import { useWeb3React } from '@scads-io/wagmi'
import { WarningIcon } from '@scads-io/uikit'
import tokens from 'config/constants/tokens'
import useTokenBalance, { FetchStatus, useGetBnbBalance } from 'hooks/useTokenBalance'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { getBscScanLink } from 'utils'
import { getFullDisplayBalance, formatBigNumber } from 'utils/formatBalance'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import TransactionRow from "components/Menu/UserMenu/TransactionRow";
import { Skeleton } from 'components/Skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

export const LOW_BNB_BALANCE = parseUnits('2', 'gwei')

const WalletDetails: React.FC = ({ onDismiss }) => {
  const { account } = useWeb3React()
  const { balance, fetchStatus } = useGetBnbBalance()
  const hasLowBnbBalance = fetchStatus === FetchStatus.SUCCESS && balance.lte(LOW_BNB_BALANCE)
  const { balance: cakeBalance, fetchStatus: cakeFetchStatus } = useTokenBalance(tokens.cake.address)

  const { logout } = useAuth()
  const allTransactions = useAllTransactions()
  const sortedTransactions = orderBy(Object.values(allTransactions).filter(isTransactionRecent), 'addedTime', 'desc')

  const onCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard.");
  };

  const handleLogout = () => {
    onDismiss()
    logout()
  }

  const { t } = useTranslation();

  return (
    <Tabs defaultValue="wallet">
      <TabsList className="grid w-full grid-cols-2 gap-x-2 bg-transparent">
        <TabsTrigger
          value="wallet"
          className="rounded-3xl border border-white/10 bg-white/[.02] text-base text-white"
        >
          {t("Wallet")}
        </TabsTrigger>
        <TabsTrigger
          value="transactions"
          className="rounded-3xl border border-white/10 bg-white/[.02] text-base text-white"
        >
          {t("Transactions")}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="wallet" className="mt-8 space-y-8 pb-4 text-white">
        <div className="space-y-4">
          <p className="font-semibold">{t("Your address")}</p>
          <div className="flex items-center justify-between rounded-3xl bg-indigo-600/10 px-4">
            <span>{t(account)}</span>
            <Button
              size="icon"
              className="bg-transparent transition hover:bg-transparent hover:opacity-70"
              onClick={() => onCopy(account)}
              variant="ghost"
            >
              <Copy className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
        {hasLowBnbBalance && (
          <div className="flex flex-row justify-center items-center">
              <WarningIcon marginRight='5px' />
              <span>{t('BNB Balance Low')}</span>
            <span>{t('You need BNB for transaction fees.')}</span>
        </div>
      )}
        <div className="space-y-2 text-sm">
          <p className="flex justify-between">
            <span>{t("BNB Balance")}</span>
            {fetchStatus !== FetchStatus.SUCCESS ? (
              <Skeleton height='22px' width='60px' />
            ) : (
              <span>{formatBigNumber(balance, 6)}</span>
            )}
          </p>
          <p className="flex justify-between">
            <span>{t("SCADS Balance")}</span>
            {cakeFetchStatus !== FetchStatus.SUCCESS ? (
              <Skeleton height='22px' width='60px' />
            ) : (
              <span>{getFullDisplayBalance(cakeBalance, 18, 3)}</span>
            )}
          </p>
        </div>
        <a
          href={getBscScanLink(account, 'address')}
          target="_blank"
          rel="noreferrer"
          className="flex justify-end gap-x-2"
        >
          {t("View on BscScan")} <ExternalLink />
        </a>
      </TabsContent>
      <TabsContent value="transactions" className="space-y-4 py-4 text-white">
        <p className="font-semibold">{t("Recent transactions")}</p>
        {sortedTransactions.length > 0 ? (
          sortedTransactions.map((txn) => <TransactionRow key={txn.hash} txn={txn} />)
        ) : (
          <div className="flex h-48 items-center justify-center">
            <p>{t("No recent transactions...")}</p>
          </div>
        )}
      </TabsContent>
      <div className="flex flex-col gap-y-4">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full rounded-3xl bg-white/10 text-base text-white hover:bg-white/20 hover:text-white"
        >
          {t("Disconnect wallet")}
        </Button>
      </div>
    </Tabs>
  );
};

export default WalletDetails;

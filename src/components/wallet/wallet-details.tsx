import toast from "react-hot-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Copy, ExternalLink } from "lucide-react";

const WalletDetails: React.FC<{ setDisconnected: () => void }> = ({
  setDisconnected,
}) => {
  const onCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    toast.success("Address copied to clipboard.");
  };

  const address = "user address placeholder";

  return (
    <Tabs defaultValue="wallet">
      <TabsList className="grid w-full grid-cols-2 gap-x-2 bg-transparent">
        <TabsTrigger
          value="wallet"
          className="rounded-3xl border border-white/10 bg-white/[.02] text-base text-white"
        >
          Wallet
        </TabsTrigger>
        <TabsTrigger
          value="transactions"
          className="rounded-3xl border border-white/10 bg-white/[.02] text-base text-white"
        >
          Transactions
        </TabsTrigger>
      </TabsList>
      <TabsContent value="wallet" className="mt-8 space-y-8 pb-4 text-white">
        <div className="space-y-4">
          <p className="font-semibold">Your address</p>
          <div className="flex items-center justify-between rounded-3xl bg-indigo-600/10 px-4">
            <span>{address}</span>
            <Button
              size="icon"
              className="bg-transparent transition hover:bg-transparent hover:opacity-70"
              onClick={() => onCopy(address)}
              variant="ghost"
            >
              <Copy className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="flex justify-between">
            <span>BNB Balance</span>
            <span>0.00</span>
          </p>
          <p className="flex justify-between">
            <span>SCADS Balance</span>
            <span>0.00</span>
          </p>
        </div>
        <a
          href={`https://bscscan.com/address/${address}`}
          target="_blank"
          rel="noreferrer"
          className="flex justify-end gap-x-2"
        >
          View on BscScan <ExternalLink />
        </a>
      </TabsContent>
      <TabsContent value="transactions" className="space-y-4 py-4 text-white">
        <p className="font-semibold">Recent transactions</p>
        {/* <--- if there are transactions ---> */}
        {/* 
          <ul className="mx-auto space-y-2 h-64 overflow-y-auto">
            <li className="text-center">transaction</li>
          </ul>
         */}
        <div className="flex h-48 items-center justify-center">
          <p>No recent transactions...</p>
        </div>
      </TabsContent>
      <div className="flex flex-col gap-y-4">
        <Button
          onClick={setDisconnected}
          variant="ghost"
          className="w-full rounded-3xl bg-white/10 text-base text-white hover:bg-white/20 hover:text-white"
        >
          Disconnect wallet
        </Button>
      </div>
    </Tabs>
  );
};

export default WalletDetails;

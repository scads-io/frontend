"use client";

import Link from "next/link";
import AddressDropdown from "./address-dropdown";
import WalletModal from "../wallet/wallet-modal";
import Socials from "../socials";
import { motion } from "framer-motion";
import LanguageDropdown from "./language-dropdown";

interface MobileMenuProps {
  close: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ close }) => {
  return (
    <div className="space-y-8 pb-8 text-white lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-24 flex justify-center gap-x-8 text-xl font-medium"
      >
        <div className="flex flex-col gap-y-4">
          <Link href="/tokenomics" onClick={close}>
            Tokenomics
          </Link>
          <AddressDropdown />
          <LanguageDropdown />
        </div>
        <div className="flex flex-col gap-y-4">
          <Link href="/use-cases" onClick={close}>
            Use cases
          </Link>
          <Link href="/whitepaper" onClick={close}>
            Whitepaper
          </Link>
          <Link href="/faq" onClick={close}>
            FAQ
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center"
      >
        <WalletModal />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Socials navigation />
      </motion.div>
    </div>
  );
};

export default MobileMenu;

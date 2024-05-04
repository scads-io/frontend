import { create } from "zustand";

interface useWalletModalStore {
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useWalletModal = create<useWalletModalStore>((set) => ({
  isConnected: false,
  onConnect: () => set({ isConnected: true }),
  onDisconnect: () => set({ isConnected: false }),
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

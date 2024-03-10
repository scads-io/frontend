import React from "react"
import { WalletFilledIcon } from "@scads-io/uikit"

const MenuIcon: React.FC = () => {
  return (
    <div className="flex items-center h-10 w-10 absolute left-0 top-0 -mt-1 justify-center z-10">
      <WalletFilledIcon color="primary" width="24px" />
    </div>
  )
}

export default MenuIcon

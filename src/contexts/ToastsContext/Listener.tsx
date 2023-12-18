import React from 'react'
import { ToastContainer } from 'components/Toast'
// eslint-disable-next-line import/no-cycle
import useToast from 'hooks/useToast'

const ToastListener = () => {
  const { toasts, remove } = useToast()

  const handleRemove = (id: string) => remove(id)

  return <ToastContainer toasts={toasts} onRemove={handleRemove} /> 
}

export default ToastListener

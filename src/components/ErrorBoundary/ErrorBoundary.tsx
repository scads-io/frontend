import React from 'react'
import * as Sentry from '@sentry/react'
import { motion } from 'framer-motion'
import { IoInformation } from 'react-icons/io5'
import { Button } from 'components/ui/button'

export default function ErrorBoundary({ children }) {
  return (
    <Sentry.ErrorBoundary
      fallback={() => {
        return (
          <div className="flex flex-col justify-center items-center">
              <IoInformation className="text-yellow-500 size-4 mb-2" />
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-[340px] text-center text-[#B4BCD0] md:max-w-[550px] xl:max-w-[740px] mb-4 md:text-lg"
              >
                Oops, something wrong.
              </motion.p>
              <Button
                onClick={() => window.location.reload()}
              >
                Click here to reset!
              </Button>
          </div>
        )
      }}
    >
      {children}
    </Sentry.ErrorBoundary>
  )
}
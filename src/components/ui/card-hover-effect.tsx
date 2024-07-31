import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'contexts/Localization'
import { cn } from 'lib/utils'

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { t } = useTranslation()

  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3', className)}>
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block size-[80%] rounded-3xl bg-violet-500"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="h-full w-full"
          >
            <Card>
              <CardTitle>{t(item.title)}</CardTitle>
              <CardDescription>{t(item.description)}</CardDescription>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-transparent bg-gradient-to-b from-transparent to-white/5 p-4 backdrop-blur-xl',
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h3
      className={cn('mt-4 rounded-3xl bg-white/[0.02] py-2 text-center font-bold tracking-wide text-white', className)}
    >
      {children}
    </h3>
  )
}
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn('mt-4 text-center text-sm leading-relaxed tracking-wide text-[#B4BCD0]', className)}>{children}</p>
  )
}

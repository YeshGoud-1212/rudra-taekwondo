import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = { eyebrow: string; title: ReactNode; copy?: string; align?: 'left' | 'center' }
export default function SectionHeading({ eyebrow, title, copy, align = 'left' }: Props) {
  return <motion.div className={`section-heading ${align === 'center' ? 'center' : ''}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .6 }}>
    <div className="eyebrow"><span />{eyebrow}</div>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </motion.div>
}

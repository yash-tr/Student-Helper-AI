import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface HeroSectionProps {
  logo?: string;
  title: string;
  highlightedText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({ 
  logo = "🎓",
  title,
  highlightedText,
  description,
  ctaText,
  ctaLink
}: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto"
    >
      <div className="w-16 h-16 bg-[#c1ff72] rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-b-4 border-r-4 border-black">
        <span className="text-3xl">{logo}</span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-gray-800">
        {title} <span className="text-[#7fb236]">{highlightedText}</span>
      </h1>
      <p className="mt-3 text-lg text-gray-600 mb-8">
        {description}
      </p>
      <Link href={ctaLink}>
        <Button className="bg-[#c1ff72] hover:bg-[#b1ef62] text-gray-800 rounded-full px-6 py-6 text-lg border-2 border-b-4 border-r-4 border-black">
          {ctaText}
          <ChevronRight className="h-5 w-5 ml-1" />
        </Button>
      </Link>
    </motion.div>
  )
}
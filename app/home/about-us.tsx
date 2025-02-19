"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <h3 className="text-2xl font-semibold mb-4">Sed ut perspiciatis unde omnis</h3>
            <p className="text-gray-600 mb-6">
              Nemo enim ipsum voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
            <Button size="lg">Learn More</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capsule-xhEz8oEt1b5iQPy6BSj2yH5JUSBmJY.png"
              alt="Modern capsule home"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import { Users, Gamepad2, CreditCard, Package } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Create your account",
    description: "Create your account and verify your identity",
  },
  {
    icon: Gamepad2,
    title: "Experience in VR",
    description: "Experience your future home in VR",
  },
  {
    icon: CreditCard,
    title: "Digital signing",
    description: "Digital signing and payment processing",
  },
  {
    icon: Package,
    title: "Welcome package",
    description: "Get your digital keys and welcome package",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4 flex justify-center">
                <step.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


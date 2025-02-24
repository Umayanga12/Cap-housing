"use client";

import { useRouter } from "next/navigation"; // ✅ Correct import
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const models = [
  {
    title: "Solo Pod",
    description:
      "Perfect for individuals seeking efficiency and minimalist living",
    features: [
      "36m² Living Space",
      "Smart Home Integration",
      "Energy Efficiency",
    ],
  },
  {
    title: "Duo Pod",
    description: "Designed for couples with adaptive space solutions",
    features: ["48m² Living Space", "Flexible Layout", "Expandable Furniture"],
  },
  {
    title: "Family Pod",
    description: "Spacious layout design perfect for small families",
    features: ["68m² Living Space", "Multiple Rooms", "Home Office Setup"],
  },
  {
    title: "Family Pod+",
    description: "Optimized floor plan design perfect for growing families",
    features: ["86m² Living Space", "Multiple Rooms", "Home Office Setup"],
  },
];

export default function HousingModels() {
  const router = useRouter(); // ✅ Corrected import

  return (
    <section className="py-20 bg-gray-50" id="models">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Housing Models
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{model.title}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="default"
            onClick={() => router.push("/model")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

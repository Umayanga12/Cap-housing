import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const housingPods = [
  {
    title: "Solo Pod",
    description:
      "Perfect for individuals seeking efficiency and comfort in urban spaces.",
    features: [
      "18m² Living Space",
      "Smart Home Integration",
      "Energy Efficient",
    ],
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png",
  },
  {
    title: "Duo Pod",
    description:
      "Designed for couples with adaptive space solutions and premium amenities.",
    features: [
      "28m² Living Space",
      "Dual Climate Zones",
      "Expandable Furniture",
    ],
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png",
  },
  {
    title: "Family Pod",
    description:
      "Spacious modular design perfect for small families and remote workers.",
    features: ["38m² Living Space", "Modular Rooms", "Home Office Setup"],
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png",
  },
  {
    title: "Family Pod",
    description:
      "Spacious modular design perfect for small families and remote workers.",
    features: ["38m² Living Space", "Modular Rooms", "Home Office Setup"],
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png",
  },
  {
    title: "Duo Pod",
    description:
      "Designed for couples with adaptive space solutions and premium amenities.",
    features: [
      "28m² Living Space",
      "Dual Climate Zones",
      "Expandable Furniture",
    ],
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png",
  },
  {
    title: "Family Pod",
    description:
      "Spacious modular design perfect for small families and remote workers.",
    features: ["38m² Living Space", "Modular Rooms", "Home Office Setup"],
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png",
  },
  {
    title: "Family Pod",
    description:
      "Spacious modular design perfect for small families and remote workers.",
    features: ["38m² Living Space", "Modular Rooms", "Home Office Setup"],
    // image:
    //   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png",
  },
];

export default function Models() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Photo
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/features" className="hover:text-gray-300">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/community" className="hover:text-gray-300">
            Community
          </Link>
          <Link href="/support" className="hover:text-gray-300">
            Support
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      {/* <section className="relative h-[400px] mb-16">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Models%20(1)-WsIA2Rxb87UnyFNV0frwHr8F8J2bD4.png"
          alt="Modern housing interior"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Housing Models
          </h1>
        </div>
      </section> */}

      {/* Housing Pods Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {housingPods.map((pod, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader className="p-0">
                <div className="relative h-64">
                  <Image
                    src={pod.image || "/placeholder.svg"}
                    alt={pod.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{pod.title}</h3>
                <p className="text-gray-400 mb-4">{pod.description}</p>
                <ul className="space-y-2">
                  {pod.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Explore Features Button */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <Button size="lg" className="bg-white text-black hover:bg-gray-200">
          Explore Features
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Exclusive Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Exclusive</h4>
              <p>Get 10% off your first order</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700"
                />
                <Button variant="outline">→</Button>
              </div>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Support</h4>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>

            {/* Account Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Account</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/account" className="hover:text-gray-300">
                  My Account
                </Link>
                <Link href="/login" className="hover:text-gray-300">
                  Login / Register
                </Link>
                <Link href="/cart" className="hover:text-gray-300">
                  Cart
                </Link>
                <Link href="/wishlist" className="hover:text-gray-300">
                  Wishlist
                </Link>
                <Link href="/shop" className="hover:text-gray-300">
                  Shop
                </Link>
              </nav>
            </div>

            {/* Quick Link Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Quick Link</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/privacy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-gray-300">
                  Terms Of Use
                </Link>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Download App Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold">Download App</h4>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© Copyright Pixcel 2023. All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

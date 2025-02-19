import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">Get 15% off your first order</p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="bg-white/10 border-white/20" />
              <Button variant="secondary">→</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full">
                App Store
              </Button>
              <Button variant="outline" className="w-full">
                Google Play
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm">
          <p>© Copyright {new Date().getFullYear()} Capsule Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


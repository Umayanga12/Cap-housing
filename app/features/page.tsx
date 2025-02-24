import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold">
          photo
        </Link>
        <div className="hidden md:flex items-center gap-6">
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
        </div>
      </nav>

      {/* Hero Section */}
      {/* <div className="relative h-[300px] flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Features-NtScPD8L18Xi3RwHmOwAX6x4KHhL89.png"
          alt="Features Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <h1 className="text-4xl md:text-6xl font-bold text-center relative z-10">
          Features & Specifications
        </h1>
      </div> */}

      {/* Specifications Table */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr class="header">
                <th rowspan="2">SPECIFICATION</th>
                <th colspan="9">MODELS</th>
              </tr>
              <tr>
                <th>X3</th>
                <th>X5</th>
                <th>X6</th>
                <th>X7</th>
                <th>P5</th>
                <th>P7</th>
                <th>P7-1</th>
                <th colspan="2">V6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Length (L) m</td>
                <td>5.6</td>
                <td>8.5</td>
                <td>9.5</td>
                <td>11.5</td>
                <td>9.5</td>
                <td>11.5</td>
                <td>5.6</td>
                <td>5.55</td>
                <td>5.55</td>
              </tr>
              <tr>
                <td>Width (W) m</td>
                <td>3.3</td>
                <td>3.3</td>
                <td>3.3</td>
                <td>3.3</td>
                <td>3.3</td>
                <td>3.3</td>
                <td>3.3</td>
                <td>4.05</td>
                <td>2.59</td>
              </tr>
              <tr>
                <td>Height (H) m</td>
                <td>3.2</td>
                <td>3.2</td>
                <td>3.2</td>
                <td>3.2</td>
                <td>3.2</td>
                <td>3.2</td>
                <td>3.2</td>
                <td>2.55</td>
                <td>2.55</td>
              </tr>
              <tr>
                <td>Floor area (m²)</td>
                <td>18</td>
                <td>28</td>
                <td>31</td>
                <td>38</td>
                <td>31.4</td>
                <td>38</td>
                <td>18</td>
                <td>20.3</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Occupancy</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2~4</td>
                <td>2</td>
                <td>2~4</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Electricity (kw)</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>15</td>
                <td>10</td>
                <td>15</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Unit weight (Ton)</td>
                <td>3.8</td>
                <td>6</td>
                <td>6</td>
                <td>8</td>
                <td>6</td>
                <td>7</td>
                <td>3.8</td>
                <td>6</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Frame</td>
                <td colspan="9">Galvanized steel box section with paint</td>
              </tr>
              <tr>
                <td>Outside panels</td>
                <td colspan="9">
                  Aluminum cladding panels with SUS screw/ Rivets
                </td>
              </tr>
              <tr>
                <td>Internal Wall & Ceiling panel</td>
                <td colspan="9">One side laminated insulated panels</td>
              </tr>
              <tr>
                <td>Insulation side wall & ceiling</td>
                <td colspan="9">Foam/ Glass wool</td>
              </tr>
              <tr>
                <td>Transparent walls</td>
                <td colspan="9">Tempered glass</td>
              </tr>
              <tr>
                <td>Floor finishing _ internal</td>
                <td colspan="9">Waterproof floor</td>
              </tr>
              <tr>
                <td>Floor finishing in toilet & shower area</td>
                <td colspan="9">Ceramic tiles (Sri Lanka branded)</td>
              </tr>
              <tr>
                <td>All Ceramic items</td>
                <td colspan="9">Branded in Sri Lanka</td>
              </tr>
              <tr>
                <td>Shower & taps</td>
                <td colspan="9">Branded in Sri Lanka</td>
              </tr>
              <tr>
                <td>All water supply pipeline</td>
                <td colspan="9">PPR</td>
              </tr>
              <tr>
                <td>Mirror</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Hot water</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>AC unit Hot & Cool</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Electrical wiring & fittings (Internal)</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Electrical wiring & fittings (External)</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Main Door with smart key</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Curtain for glass area</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td colspan="10" class="header">
                  ROOM/ ROOMS
                </td>
              </tr>
              <tr>
                <td>Bed (Double) x 1</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
                <td>2</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Coffee table</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Chair</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Wardrobe</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>1</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Toilet (WC)</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Shower area</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Ceramic Sink</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Ceramic Sink with cupboard</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Pantry</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Single electric induction cooker</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td colspan="10" class="header">
                  SITTING AREA
                </td>
              </tr>
              <tr>
                <td>Coffee table</td>
                <td>-</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Chair</td>
                <td>-</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Sofa</td>
                <td>-</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td colspan="10" class="header">
                  OPEN LOBBY
                </td>
              </tr>
              <tr>
                <td>Door with smart key</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>✓</td>
                <td>✓</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Coffee table</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Chair</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Numbers of base column</td>
                <td colspan="9">2 ~ 6 according to model</td>
              </tr>
              <tr>
                <td>Base column details design</td>
                <td colspan="9">Provided by supplier</td>
              </tr>
              <tr>
                <td>Base column construction on site</td>
                <td colspan="9">Owner/ Supplier with additional cost</td>
              </tr>
              <tr>
                <td>Time of Fabrication</td>
                <td colspan="9">45 Days after downpayment</td>
              </tr>
              <tr>
                <td>Warranty</td>
                <td colspan="9">10 Years</td>
              </tr>
              <tr>
                <td>Transport & installation</td>
                <td colspan="9">
                  Subject to Distance & Location (More than 6 units FOC)
                </td>
              </tr>
              <tr>
                <td>Stranded price (LKR) Million</td>
                <td colspan="9"></td>
              </tr>
              <tr>
                <td colspan="10" class="header">
                  OPTIONS
                </td>
              </tr>
              <tr>
                <td>Internal customize</td>
                <td colspan="9">
                  Acceptable with additional cost (Negotiable)
                </td>
              </tr>
              <tr>
                <td>External extension</td>
                <td colspan="9">
                  Acceptable with additional cost (Negotiable)
                </td>
              </tr>
              <tr>
                <td>Site Visit</td>
                <td colspan="9">
                  Transport cost applicable if does not purchase
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interest Form */}
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Are you interested ??</h2>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <form className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-zinc-800 border-zinc-700"
          />
          <Textarea
            placeholder="Your Message"
            className="bg-zinc-800 border-zinc-700"
          />
          <Button className="w-32">
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Exclusive */}
          <div>
            <h3 className="font-bold mb-4">Exclusive</h3>
            <div className="space-y-4">
              <p>Subscribe</p>
              <p className="text-sm">Get 10% off your first order</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-800 border-zinc-700"
                />
                <Button variant="ghost" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <div className="space-y-2">
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-bold mb-4">Account</h3>
            <div className="space-y-2">
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="font-bold mb-4">Quick Link</h3>
            <div className="space-y-2">
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="max-w-6xl mx-auto flex justify-between items-center mt-12 pt-8 border-t border-zinc-800">
          <p>© Copyright Rimel 2022. All right reserved.</p>
          <div className="flex gap-4">
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
          </div>
        </div>
      </footer>
    </div>
  );
}

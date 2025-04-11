import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-orange-800 mb-4">Farm Fresh Poultry</h3>
            <p className="text-gray-600 mb-4">
              Our family-owned poultry farm is dedicated to raising healthy, happy chickens that produce the freshest, most delicious meat and eggs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-orange-600 hover:text-orange-700">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-orange-600 hover:text-orange-700">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-orange-600 hover:text-orange-700">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-800 mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-orange-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-orange-600">
                About Us
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-orange-600">
                Our Products
              </Link>
              <Link href="/farm" className="text-gray-600 hover:text-orange-600">
                Farm Tour
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-orange-600">
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-800 mb-4">Products</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/products/whole-chicken" className="text-gray-600 hover:text-orange-600">
                Whole Chicken
              </Link>
              <Link href="/products/chicken-cuts" className="text-gray-600 hover:text-orange-600">
                Chicken Cuts
              </Link>
              <Link href="/products/eggs" className="text-gray-600 hover:text-orange-600">
                Farm Fresh Eggs
              </Link>
              <Link href="/products/special-packs" className="text-gray-600 hover:text-orange-600">
                Special Packs
              </Link>
              <Link href="/products/feed" className="text-gray-600 hover:text-orange-600">
                Poultry Feed
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-800 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-orange-600 mt-0.5" />
                <span className="text-gray-600">
                  123 Farm Road, Countryside<br />
                  Poultry County, PC 12345
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-orange-600" />
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-orange-600" />
                <span className="text-gray-600">info@farmfreshpoultry.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-100 mt-8 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Farm Fresh Poultry. All rights reserved.</p>
          <div className="mt-2 text-xs space-x-4">
            <Link href="/privacy" className="text-gray-500 hover:text-orange-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-orange-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

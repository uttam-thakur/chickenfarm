"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image
              src="/logo.svg"
              alt="Farm Fresh Poultry"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-bold text-[#C84212]">Farm Fresh Poultry</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-[#E85D04] font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-[#E85D04] font-medium">
            About
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-[#E85D04] font-medium">
            Products
          </Link>
          <Link href="/farm" className="text-gray-700 hover:text-[#E85D04] font-medium">
            Our Farm
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-[#E85D04] font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-[#E85D04]">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#E85D04]">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-[#E85D04] text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              0
            </span>
          </Button>
          <Button asChild className="bg-[#E85D04] hover:bg-[#DC4C04] hidden md:flex">
            <Link href="/contact">
              Order Now
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-[#E85D04] font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#E85D04] font-medium">
              About
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-[#E85D04] font-medium">
              Products
            </Link>
            <Link href="/farm" className="text-gray-700 hover:text-[#E85D04] font-medium">
              Our Farm
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#E85D04] font-medium">
              Contact
            </Link>
            <Button asChild className="bg-[#E85D04] hover:bg-[#DC4C04] w-full mt-2">
              <Link href="/contact">
                Order Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

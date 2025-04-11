import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "Our Products - Farm Fresh Poultry",
  description:
    "Browse our selection of farm-fresh chicken products. From whole chickens to specialty cuts, we offer the highest quality poultry raised on our farm.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-[#B23F00] mb-4">Our Products</h1>
        <p className="text-gray-600">
          All our products come from chickens raised on our family-owned farm.
          Our birds are fed a natural diet, given room to roam freely, and never
          administered antibiotics or hormones.
        </p>
      </div>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#B23F00] mb-4">
            Our Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of high-quality chicken products, from whole
            chickens to specialty cuts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#B23F00]">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.description}
                </p>
                <div className="mt-auto pt-4">
                  <p className="text-lg font-bold text-[#E85D04] mb-3">
                    ${product.price.toFixed(2)} / {product.unit}
                  </p>
                  <Button className="w-full bg-[#E85D04] hover:bg-[#DC4C04]">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#E85D04] text-[#E85D04] hover:bg-orange-50"
          >
            View All Products
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#B23F00] mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our product categories to find exactly what you're looking
            for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`#${category.id}`}
              className="block group"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bulk Orders CTA */}
      <section className="bg-[#FFF8F0] p-8 rounded-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#B23F00] mb-4">
              Looking for Bulk Orders?
            </h2>
            <p className="text-gray-600 mb-6">
              We offer special pricing for bulk orders for restaurants, markets,
              and large events. Contact us today to discuss your specific needs
              and get a custom quote.
            </p>
            <Button className="bg-[#E85D04] hover:bg-[#DC4C04]">
              Contact for Bulk Orders
            </Button>
          </div>
          <div className="flex-1 relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1610725663727-08695a1ac3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Bulk chicken orders"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample product data
const categories = [
  {
    id: "whole-chickens",
    name: "Whole Chickens",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000202513/www.fosterfarms.com/wp-content/uploads/557-7569-451012-RTC-CON-BRSTTNDRSBLSL-3D_H.png",
  },
  {
    id: "chicken-cuts",
    name: "Chicken Cuts",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000202513/www.fosterfarms.com/wp-content/uploads/557-7569-451012-RTC-CON-BRSTTNDRSBLSL-3D_H.png",
  },
  {
    id: "eggs",
    name: "Farm Fresh Eggs",
    image:
      "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: "special-packs",
    name: "Special Packs",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000202513/www.fosterfarms.com/wp-content/uploads/960-72763-450959-RTC-CON-PCNCPCK-25PD_H.png",
  },
];

const products = [
  {
    id: 1,
    name: "Whole Chicken",
    description: "Farm-raised, free-range whole chicken",
    price: 12.99,
    unit: "kg",
    image:
      "https://www.justbarefoods.com/wp-content/uploads/2023/02/52829_JB_BSB_18_oz_Front_resized1-e16766592956651.webp",
  },
  {
    id: 2,
    name: "Chicken Breast",
    description: "Boneless, skinless chicken breast",
    price: 14.99,
    unit: "kg",
    image:
      "https://www.justbarefoods.com/wp-content/uploads/2023/02/52829_JB_BSB_18_oz_Front_resized1-e16766592956651.webp",
  },
  {
    id: 3,
    name: "Chicken Drumsticks",
    description: "Juicy and flavorful chicken drumsticks",
    price: 9.99,
    unit: "kg",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000202513/www.fosterfarms.com/wp-content/uploads/508-7568-451013-RTC-CON-DRMSTCKS-3D_H.png",
  },
  {
    id: 4,
    name: "Farm Fresh Eggs",
    description: "Organic, free-range chicken eggs",
    price: 4.99,
    unit: "dozen",
    image:
      "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
];

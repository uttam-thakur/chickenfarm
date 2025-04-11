import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#C84212] mb-4">
              Farm Fresh Poultry
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our family-owned poultry farm raises the healthiest chickens to provide you with the freshest, most delicious meat and eggs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#E85D04] hover:bg-[#DC4C04] text-white">
                <Link href="/products">
                  Shop Our Products
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#E85D04] text-[#E85D04] hover:bg-orange-50">
                <Link href="/farm">
                  Take a Farm Tour
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#B23F00] mb-4">Why Choose Our Chicken?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Farm Fresh Poultry, we take pride in raising chickens the right way. Our commitment to quality and ethical practices sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E85D04]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#B23F00] mb-2">No Antibiotics</h3>
              <p className="text-gray-600">
                Our chickens are raised without antibiotics, ensuring a healthy and natural product for your family.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E85D04]">
                  <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3.08" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <rect x="2" y="8" width="4" height="12" rx="1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#B23F00] mb-2">Fresh Daily</h3>
              <p className="text-gray-600">
                We process our chicken products daily, ensuring you get the freshest meat possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E85D04]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#B23F00] mb-2">Home Delivery</h3>
              <p className="text-gray-600">
                Enjoy the convenience of farm-fresh chicken delivered right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#B23F00] mb-4">Our Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our selection of high-quality chicken products, from whole chickens to specialty cuts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-[#B23F00]">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-[#E85D04]">${product.price.toFixed(2)} / {product.unit}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#E85D04] hover:bg-[#DC4C04]">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-[#E85D04] text-[#E85D04] hover:bg-orange-50">
              <Link href="/products">
                View All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Farm Section */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#B23F00] mb-4">Our Poultry Farm</h2>
              <p className="text-gray-600 mb-6">
                Our family has been raising chickens for over 30 years. We believe in sustainable and ethical farming practices that prioritize the welfare of our birds and the quality of our products.
              </p>
              <p className="text-gray-600 mb-6">
                Our free-range chickens enjoy spacious outdoor areas where they can roam, forage, and exhibit their natural behaviors. We feed them a balanced diet of grains, vegetables, and natural supplements to ensure they grow healthy and strong.
              </p>
              <Button asChild className="bg-[#E85D04] hover:bg-[#DC4C04]">
                <Link href="/farm">
                  Learn More About Our Farm
                </Link>
              </Button>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Our poultry farm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#B23F00] mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied customers about their experience with our products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={`star-${testimonial.id}-${i}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={i < testimonial.rating ? "#f97316" : "none"} stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <CardTitle className="text-[#B23F00]">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E85D04] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Taste the Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Order today and experience the exceptional quality of our farm-fresh chicken products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#E85D04] hover:bg-gray-100">
              <Link href="/products">
                Shop Now
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-[#DC4C04]">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample products data
const products = [
  {
    id: 1,
    name: "Whole Chicken",
    description: "Farm-raised, free-range whole chicken",
    price: 12.99,
    unit: "kg",
    image: "https://marvel-b1-cdn.bc0a.com/f00000000202513/www.fosterfarms.com/wp-content/uploads/7825-450748-TRKY-CON-TRKYHD-6P-H.png",
  },
  {
    id: 2,
    name: "Chicken Breast",
    description: "Boneless, skinless chicken breast",
    price: 14.99,
    unit: "kg",
    image: "https://www.justbarefoods.com/wp-content/uploads/2023/02/52829_JB_BSB_18_oz_Front_resized1-e16766592956651.webp",
  },
  {
    id: 3,
    name: "Chicken Drumsticks",
    description: "Juicy and flavorful chicken drumsticks",
    price: 9.99,
    unit: "kg",
    image: "https://marvel-b1-cdn.bc0a.com/f00000000202513/www.fosterfarms.com/wp-content/uploads/508-7568-451013-RTC-CON-DRMSTCKS-3D_H.png",
  },
  {
    id: 4,
    name: "Farm Fresh Eggs",
    description: "Organic, free-range chicken eggs",
    price: 4.99,
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
];

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "October 10, 2023",
    comment: "I've never tasted chicken this flavorful before! The meat is tender and juicy, and knowing it comes from a farm that treats their animals well makes it even better.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    rating: 5,
    date: "September 22, 2023",
    comment: "The delivery was prompt and the packaging was excellent. The chicken breasts were plump and fresh. My family loved the taste!",
  },
  {
    id: 3,
    name: "Emily Chen",
    rating: 4,
    date: "November 5, 2023",
    comment: "Their eggs are amazing - bright yellow yolks and so much flavor. You can definitely taste the difference compared to store-bought eggs.",
  },
];

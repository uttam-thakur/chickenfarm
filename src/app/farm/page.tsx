import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Our Farm - Farm Fresh Poultry",
  description:
    "Learn about our family-owned poultry farm. We raise our chickens with care, giving them room to roam and a natural diet to produce the best quality meat and eggs.",
};

export default function FarmPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            alt="Our poultry farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Farm
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Where happy chickens produce the most delicious meat and eggs
          </p>
        </div>
      </section>

      {/* Farm Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto">
              <p>
                Our family has been raising chickens for over 30 years. What
                started as a small backyard flock has grown into a thriving
                poultry farm that serves our local community with the freshest,
                most delicious chicken products available.
              </p>
              <p>
                We believe that the best-tasting chicken comes from birds that
                are raised in humane, stress-free environments. That's why our
                chickens are given ample space to roam, access to fresh air and
                sunlight, and a natural diet that keeps them healthy and strong.
              </p>
              <p>
                Unlike industrial poultry operations, we never use growth
                hormones or preventative antibiotics. Our chickens grow at their
                natural pace, developing robust flavor and texture that
                factory-farmed birds simply can't match.
              </p>
              <p>
                Today, we're proud to continue our family's tradition of
                sustainable farming while incorporating modern practices that
                ensure the highest standards of quality and safety for our
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Chickens */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">
            Our Chickens
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-4">
                Free Range & Happy
              </h3>
              <p className="text-gray-700 mb-6">
                Our chickens spend their days foraging in our spacious pastures,
                enjoying fresh air, sunlight, and plenty of room to exhibit
                their natural behaviors. They have access to shelter when they
                need it but are free to roam during the day.
              </p>
              <p className="text-gray-700 mb-6">
                We maintain a low chicken-to-land ratio to prevent overgrazing
                and ensure that each bird has ample space to thrive. This
                low-density approach also keeps our chickens healthier and
                reduces stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/products">Shop Our Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1548550019-f212b5e05b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Free-range chickens at our farm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Practices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">
            Our Farming Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2 text-center">
                No Antibiotics
              </h3>
              <p className="text-gray-600 text-center">
                We never use antibiotics or growth hormones. Our chickens are
                raised naturally, resulting in healthier birds and safer meat
                for your family.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-600"
                >
                  <path d="M20 22v-6M4 4v6"></path>
                  <rect x="2" y="10" width="4" height="12" rx="2"></rect>
                  <rect x="18" y="16" width="4" height="6" rx="2"></rect>
                  <path d="M15.5 4h-7l-.167.167a4 4 0 000 5.666l.167.167h7l.167-.167a4 4 0 000-5.666L15.5 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2 text-center">
                Natural Diet
              </h3>
              <p className="text-gray-600 text-center">
                Our chickens eat a balanced diet of grains, vegetables, and
                insects they forage themselves. We supplement with non-GMO feed
                to ensure optimal nutrition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-600"
                >
                  <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"></path>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2 text-center">
                Humane Treatment
              </h3>
              <p className="text-gray-600 text-center">
                Our chickens are treated with care and respect. We provide
                spacious, clean coops, access to outdoor areas, and gentle
                handling at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Tour */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589922585952-b31ed31b2c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvdWx0cnklMjBmYXJtfGVufDB8fDB8fHww"
                alt="Farm tour"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-orange-800 mb-4">
                Visit Our Farm
              </h2>
              <p className="text-gray-700 mb-6">
                We offer guided tours of our farm for visitors who want to see
                our operations firsthand. It's a great educational experience
                for families and groups who want to learn about sustainable
                poultry farming.
              </p>
              <p className="text-gray-700 mb-6">
                Tours are available by appointment on Saturdays from 10 AM to 2
                PM. During your visit, you'll see our pastures, coops, and
                processing facilities, and learn about our farming practices.
                You'll also have the opportunity to purchase fresh products
                directly from our farm store.
              </p>
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contact">Book a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-800 mb-12 text-center">
            Our Commitment to Sustainability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-orange-700 mb-4">
                Environmentally Responsible Farming
              </h3>
              <p className="text-gray-700 mb-6">
                We're committed to preserving the land for future generations.
                Our rotational grazing system allows pastures to recover and
                helps build healthy soil. Chicken manure naturally fertilizes
                our fields, reducing the need for synthetic fertilizers.
              </p>
              <p className="text-gray-700 mb-6">
                We've implemented water conservation practices throughout our
                farm, including rainwater collection systems and efficient
                irrigation. Our farm buildings utilize solar power where
                possible, reducing our carbon footprint.
              </p>
              <p className="text-gray-700">
                By choosing Farm Fresh Poultry products, you're supporting
                environmentally responsible farming practices that help protect
                our planet.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80"
                alt="Sustainable farm practices"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Taste the Farm Fresh Difference
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the exceptional flavor and quality that comes from our
            ethically raised, naturally grown chickens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              <Link href="/products">Shop Our Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-orange-700"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

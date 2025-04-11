import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About Us - Farm Fresh Poultry",
  description:
    "Learn about our family-owned poultry farm. We've been raising chickens with care for over 30 years, providing the freshest, most delicious chicken and eggs.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-[#B23F00] mb-4">
          About Farm Fresh Poultry
        </h1>
        <p className="text-gray-600">
          A family-owned poultry farm dedicated to raising healthy, happy
          chickens and providing our community with the freshest, most delicious
          chicken products available.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdWx0cnklMjBmYXJtfGVufDB8fDB8fHww"
              alt="Our poultry farm"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#B23F00] mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Farm Fresh Poultry began over 30 years ago when the Johnson family
              decided to turn their small backyard flock into a business that
              could serve their local community with fresh, quality poultry
              products.
            </p>
            <p className="text-gray-700 mb-4">
              What started with just 50 chickens has grown into a thriving farm
              operation with thousands of birds, all raised with the same care
              and attention to detail that defined our humble beginnings.
            </p>
            <p className="text-gray-700">
              Today, the second generation of the Johnson family continues the
              tradition of sustainable farming while incorporating modern
              practices that ensure the highest standards of quality and safety
              for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16 py-16 bg-[#FFF8F0] rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#B23F00] mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            "To raise the healthiest chickens possible in a humane, sustainable
            environment while providing our customers with the freshest, most
            delicious poultry products available."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
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
                  className="text-[#E85D04]"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#B23F00] mb-2">Quality</h3>
              <p className="text-gray-600 text-center">
                We're committed to producing the highest quality poultry through
                careful breeding, proper nutrition, and ethical raising
                practices.
              </p>
            </div>
            <div className="text-center">
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
                  className="text-[#E85D04]"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#B23F00] mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600 text-center">
                Our farming practices are designed to protect the environment
                and preserve the land for future generations.
              </p>
            </div>
            <div className="text-center">
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
                  className="text-[#E85D04]"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#B23F00] mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-center">
                We believe in supporting our local community by providing jobs,
                participating in farmers markets, and donating to local food
                banks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#B23F00] mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#B23F00]">
                {member.name}
              </h3>
              <p className="text-[#E85D04] mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-16 py-16 bg-[#FFF8F0] rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#B23F00] mb-6">
            Our Certifications
          </h2>
          <p className="text-gray-700 mb-12">
            We're proud to maintain the highest standards of quality and ethical
            farming practices, as recognized by these certifications:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#B23F00] mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#B23F00] mb-6">
          Experience the Difference
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          We invite you to taste the difference that comes from naturally
          raised, ethically produced chicken. Browse our products or schedule a
          visit to our farm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#E85D04] hover:bg-[#DC4C04]">
            <Link href="/products">Shop Our Products</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#E85D04] text-[#E85D04] hover:bg-orange-50"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

// Sample team data
const teamMembers = [
  {
    name: "Robert Johnson",
    role: "Founder & Farm Manager",
    bio: "With over 30 years of poultry farming experience, Robert oversees all farm operations and maintains our high standards of quality.",
    image:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing & Sales Director",
    bio: "Sarah handles our direct-to-consumer sales, farmers market presence, and relationships with local restaurants and grocery stores.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80",
  },
  {
    name: "Michael Johnson",
    role: "Poultry Specialist",
    bio: "Michael has a degree in animal husbandry and ensures our chickens receive proper nutrition, care, and an optimal living environment.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
];

// Sample certification data
const certifications = [
  {
    name: "Certified Organic",
    description:
      "Our organic chickens are raised according to strict USDA organic standards without antibiotics or synthetic pesticides.",
  },
  {
    name: "Certified Humane",
    description:
      "This certification ensures our chickens are raised with adequate space, shelter, and the ability to engage in natural behaviors.",
  },
  {
    name: "Animal Welfare Approved",
    description:
      "Recognizes our commitment to the highest animal welfare and environmental standards in poultry farming.",
  },
  {
    name: "Non-GMO Project Verified",
    description:
      "Confirms our chickens are fed a diet free from genetically modified ingredients.",
  },
];

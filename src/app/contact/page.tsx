import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Contact Us - Farm Fresh Poultry",
  description: "Get in touch with Farm Fresh Poultry. Contact us for product inquiries, farm tours, or any questions about our poultry products.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-orange-800 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you! Whether you have questions about our products, want to schedule a farm tour, or need assistance with an order, our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-orange-700 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="Your first name"
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  placeholder="Your last name"
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@example.com"
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="How can we help you?"
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Your message here..."
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-orange-700 mb-6">Contact Information</h2>

          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    123 Farm Road, Countryside<br />
                    Poultry County, PC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">info@farmfreshpoultry.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8AM - 5PM<br />
                    Saturday: 9AM - 3PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden mb-8">
            <Image
              src="https://images.unsplash.com/photo-1577186464796-1f19ce6ec2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Our farm location"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-700 mb-3">Farm Tours</h3>
            <p className="text-gray-600 mb-4">
              Interested in seeing our farm in person? We offer guided tours for individuals, families, and groups by appointment only on Saturdays.
            </p>
            <p className="text-gray-600">
              To schedule a tour, please call us or fill out the contact form with your preferred date and time.
            </p>
          </div>
        </div>
      </div>

      {/* Map (Placeholder) */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-orange-700 mb-6 text-center">Find Us</h2>
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Interactive Map would be displayed here</p>
        </div>
        <p className="text-center text-gray-600 mt-4">
          We're located just 15 minutes from downtown, with easy access from the main highway.
        </p>
      </div>
    </div>
  );
}

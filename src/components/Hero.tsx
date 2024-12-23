import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Users, Target } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-100/40 to-transparent py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connect with people who share your
            <span className="text-primary-600"> passions</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Discover like-minded individuals within 500 meters of you. Join communities, attend events,
            and make meaningful connections based on shared interests and goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {[
            {
              icon: MapPin,
              title: "Location-Based",
              description: "Connect with people nearby, within a 500m radius"
            },
            {
              icon: Users,
              title: "Shared Interests",
              description: "Find people who share your passions and hobbies"
            },
            {
              icon: Target,
              title: "Common Goals",
              description: "Meet others working towards similar objectives"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 bg-white/60 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-secondary-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
};

export default Hero;
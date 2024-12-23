import React from 'react';
import { MapPin, Users, MessageSquare, Calendar, Shield } from 'lucide-react';
import Map from './Map';

const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Connect Locally</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build meaningful connections
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Qirb brings together people with shared interests, skills, and goals in your local area,
            making it easy to connect and collaborate.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-y-10">
              {[
                {
                  name: 'Location-Based Matching',
                  description: 'Connect with people within 500 meters of your location.',
                  icon: MapPin,
                },
                {
                  name: 'Interest Groups',
                  description: 'Join groups based on your hobbies and interests.',
                  icon: Users,
                },
                {
                  name: 'Real-time Messaging',
                  description: 'Chat with your matches instantly.',
                  icon: MessageSquare,
                },
                {
                  name: 'Local Events',
                  description: 'Discover and create events in your area.',
                  icon: Calendar,
                },
                {
                  name: 'Privacy Controls',
                  description: 'Control who can see your profile and location.',
                  icon: Shield,
                },
              ].map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <feature.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:pl-8">
              <div className="relative">
                <Map />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
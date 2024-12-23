import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Users } from 'lucide-react';
import { mockUsers } from '@/utils/mockData';

const Discover = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Discover People Nearby
        </h1>
        <p className="text-lg text-gray-600">
          Connect with like-minded individuals within 500 meters of your location
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockUsers.map((user) => (
          <Card key={user.id} className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary-600" />
                {user.distance}m away
              </div>
              <CardTitle className="text-xl font-semibold">{user.name}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {user.interests.join(', ')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Goals</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.goals.map((goal, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full mt-4 group-hover:bg-primary-700 transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Discover;
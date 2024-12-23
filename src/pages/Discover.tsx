import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Users, Sparkles, Filter, Zap } from 'lucide-react';
import { mockUsers } from '@/utils/mockData';
import { subscriptionTiers, mockUserSubscription } from '@/utils/mockSubscription';
import { useToast } from '@/components/ui/use-toast';

const Discover = () => {
  const { toast } = useToast();
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    distance: 500,
    interests: [] as string[],
    skills: [] as string[],
  });

  const handleConnect = (userId: string) => {
    if (mockUserSubscription.tier === 'free') {
      toast({
        title: "Premium Feature",
        description: "Upgrade to Premium to send unlimited messages!",
        action: (
          <Button variant="default" size="sm" onClick={() => setShowPremiumModal(true)}>
            Upgrade
          </Button>
        ),
      });
    } else {
      toast({
        title: "Message Sent!",
        description: "Your connection request has been sent.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Discover People Nearby
          </h1>
          <p className="text-lg text-gray-600">
            Connect with like-minded individuals within 500 meters
          </p>
        </div>
        
        {mockUserSubscription.tier === 'free' && (
          <Button
            onClick={() => setShowPremiumModal(true)}
            className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Upgrade to Premium
          </Button>
        )}
      </div>

      <div className="flex gap-6">
        <div className="w-64 hidden lg:block">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filters</CardTitle>
              <CardDescription>
                {mockUserSubscription.tier === 'free' ? 
                  'Upgrade to access advanced filters' : 
                  'Refine your matches'
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full mb-4"
                disabled={mockUserSubscription.tier === 'free'}
                onClick={() => setShowPremiumModal(true)}
              >
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockUsers.map((user) => (
              <Card key={user.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="relative">
                  {user.id === '1' && mockUserSubscription.tier === 'premium' && (
                    <div className="absolute -top-2 -right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Boosted
                    </div>
                  )}
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
                            className="px-3 py-1 bg-secondary/10 text-secondary-700 rounded-full text-sm"
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
                            className="px-3 py-1 bg-accent/10 text-accent-700 rounded-full text-sm"
                          >
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="w-full group-hover:bg-primary-700 transition-colors"
                      onClick={() => handleConnect(user.id)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {showPremiumModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Upgrade to Premium</CardTitle>
              <CardDescription className="text-center">
                Unlock all features and boost your connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {subscriptionTiers.map((tier) => (
                  <Card key={tier.name} className={`relative ${tier.isPopular ? 'border-primary-600 border-2' : ''}`}>
                    {tier.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{tier.name}</CardTitle>
                      <CardDescription>
                        {tier.price === 0 ? 'Free' : `$${tier.price}/month`}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tier.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full mt-6"
                        variant={tier.price === 0 ? "outline" : "default"}
                        onClick={() => {
                          setShowPremiumModal(false);
                          if (tier.price > 0) {
                            toast({
                              title: "Coming Soon",
                              description: "Premium subscriptions will be available soon!",
                            });
                          }
                        }}
                      >
                        {tier.price === 0 ? 'Current Plan' : 'Upgrade Now'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Discover;
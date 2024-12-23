import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Check } from 'lucide-react';

interface PremiumFeatureModalProps {
  onClose: () => void;
}

const PremiumFeatureModal = ({ onClose }: PremiumFeatureModalProps) => {
  const tiers = [
    {
      name: 'Free',
      price: 0,
      features: [
        'Basic Profile',
        'Location-based Matching',
        'Limited Event Discovery',
        'Basic Messaging (5/day)',
      ],
    },
    {
      name: 'Premium',
      price: 9.99,
      features: [
        'Profile Boost',
        'Advanced Matching Filters',
        'Unlimited Messaging',
        'Event Promotion',
        'Priority Support',
      ],
      isPopular: true,
    },
  ];

  return (
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
            {tiers.map((tier) => (
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
                        <Check className="w-4 h-4 text-primary-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6"
                    variant={tier.price === 0 ? "outline" : "default"}
                    onClick={onClose}
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
  );
};

export default PremiumFeatureModal;
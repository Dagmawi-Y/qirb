import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';

interface DiscoverHeaderProps {
  onUpgradeClick: () => void;
  isPremium: boolean;
}

const DiscoverHeader = ({ onUpgradeClick, isPremium }: DiscoverHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Discover People Nearby
        </h1>
        <p className="text-lg text-gray-600">
          Connect with like-minded individuals within 500 meters
        </p>
      </div>
      
      {!isPremium && (
        <Button
          onClick={onUpgradeClick}
          className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Upgrade to Premium
        </Button>
      )}
    </div>
  );
};

export default DiscoverHeader;
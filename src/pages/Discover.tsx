import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { mockUsers } from '@/utils/mockData';
import PremiumFeatureModal from '@/components/discover/PremiumFeatureModal';
import DiscoverHeader from '@/components/discover/DiscoverHeader';
import DiscoverFilters from '@/components/discover/DiscoverFilters';
import UserCard from '@/components/discover/UserCard';

const Discover = () => {
  const { toast } = useToast();
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [isPremium] = useState(false); // This would normally come from auth state

  const handleConnect = (userId: string) => {
    if (!isPremium) {
      toast({
        title: "Premium Feature",
        description: "Upgrade to Premium to send unlimited messages!",
        action: (
          <button
            onClick={() => setShowPremiumModal(true)}
            className="bg-primary-600 text-white px-3 py-1.5 text-sm rounded-md hover:bg-primary-700"
          >
            Upgrade
          </button>
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
      <DiscoverHeader 
        onUpgradeClick={() => setShowPremiumModal(true)}
        isPremium={isPremium}
      />

      <div className="flex gap-6">
        <div className="w-64 hidden lg:block">
          <DiscoverFilters
            isPremium={isPremium}
            onUpgradeClick={() => setShowPremiumModal(true)}
          />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isPremium={isPremium}
                onConnect={handleConnect}
              />
            ))}
          </div>
        </div>
      </div>

      {showPremiumModal && (
        <PremiumFeatureModal onClose={() => setShowPremiumModal(false)} />
      )}
    </div>
  );
};

export default Discover;
export interface SubscriptionTier {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface UserSubscription {
  tier: 'free' | 'premium';
  features: {
    profileBoost: boolean;
    advancedFilters: boolean;
    unlimitedMessaging: boolean;
    eventPromotion: boolean;
  };
}

export const subscriptionTiers: SubscriptionTier[] = [
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

export const mockUserSubscription: UserSubscription = {
  tier: 'free',
  features: {
    profileBoost: false,
    advancedFilters: false,
    unlimitedMessaging: false,
    eventPromotion: false,
  },
};
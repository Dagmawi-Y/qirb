import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DiscoverFiltersProps {
  isPremium: boolean;
  onUpgradeClick: () => void;
}

const DiscoverFilters = ({ isPremium, onUpgradeClick }: DiscoverFiltersProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
        <CardDescription>
          {!isPremium ? 
            'Upgrade to access advanced filters' : 
            'Refine your matches'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full mb-4"
          disabled={!isPremium}
          onClick={onUpgradeClick}
        >
          <Filter className="mr-2 h-4 w-4" />
          Advanced Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default DiscoverFilters;
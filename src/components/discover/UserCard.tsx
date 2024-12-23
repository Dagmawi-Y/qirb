import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Users, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from '@/utils/mockData';

interface UserCardProps {
  user: User;
  isPremium: boolean;
  onConnect: (userId: string) => void;
}

const UserCard = ({ user, isPremium, onConnect }: UserCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="relative">
        {user.id === '1' && isPremium && (
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
            onClick={() => onConnect(user.id)}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
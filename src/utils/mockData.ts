export interface User {
  id: string;
  name: string;
  interests: string[];
  skills: string[];
  goals: string[];
  location: {
    lat: number;
    lng: number;
  };
  distance: number;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    interests: ['Photography', 'Hiking', 'Coffee'],
    skills: ['Digital Photography', 'Trail Navigation'],
    goals: ['Learn Spanish', 'Run a Marathon'],
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    distance: 200
  },
  {
    id: '2',
    name: 'Sarah Chen',
    interests: ['Coding', 'Rock Climbing', 'Meditation'],
    skills: ['React', 'Python', 'Lead Climbing'],
    goals: ['Build a Startup', 'Master Yoga'],
    location: {
      lat: 40.7129,
      lng: -74.0061
    },
    distance: 350
  },
  {
    id: '3',
    name: 'Miguel Rodriguez',
    interests: ['Music Production', 'Fitness', 'Cooking'],
    skills: ['Ableton Live', 'Personal Training'],
    goals: ['Release an EP', 'Open a Restaurant'],
    location: {
      lat: 40.7127,
      lng: -74.0059
    },
    distance: 150
  }
];

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  attendees: number;
  category: string;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Local Photography Meetup',
    description: 'Join fellow photographers for a morning shoot in the park',
    date: '2024-02-01T09:00:00',
    location: 'Central Park',
    organizer: 'Alex Thompson',
    attendees: 12,
    category: 'Photography'
  },
  {
    id: '2',
    title: 'Tech Startup Networking',
    description: 'Connect with local entrepreneurs and developers',
    date: '2024-02-03T18:30:00',
    location: 'Innovation Hub',
    organizer: 'Sarah Chen',
    attendees: 25,
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Community Cooking Class',
    description: 'Learn to cook authentic Spanish dishes',
    date: '2024-02-05T19:00:00',
    location: 'Community Center',
    organizer: 'Miguel Rodriguez',
    attendees: 8,
    category: 'Cooking'
  }
];
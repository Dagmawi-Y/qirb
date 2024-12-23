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
  image: string;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Photography Workshop',
    description: 'Learn the art of street photography in this hands-on workshop.',
    date: '2024-02-15T14:00:00',
    location: 'Central Park',
    organizer: 'Alex Thompson',
    attendees: 15,
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=600'
  },
  {
    id: '2',
    title: 'Tech Startup Meetup',
    description: 'Network with local entrepreneurs and share startup experiences.',
    date: '2024-02-18T18:30:00',
    location: 'Innovation Hub',
    organizer: 'Sarah Chen',
    attendees: 30,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600'
  },
  {
    id: '3',
    title: 'Cooking Masterclass',
    description: 'Master the art of Spanish cuisine with Chef Miguel.',
    date: '2024-02-20T19:00:00',
    location: 'Community Kitchen',
    organizer: 'Miguel Rodriguez',
    attendees: 12,
    category: 'Cooking',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600'
  }
];
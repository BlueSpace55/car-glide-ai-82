
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Search } from 'lucide-react';
import { useState } from 'react';

const LocationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const locations = [
    {
      state: 'Texas',
      city: 'Dallas',
      address: '2500 Victory Avenue, Dallas, TX 75219',
      phone: '(214) 555-0123',
      hours: 'Mon-Fri: 7AM-7PM, Sat-Sun: 8AM-6PM',
      airport: true
    },
    {
      state: 'Texas',
      city: 'Houston',
      address: '15005 John F Kennedy Blvd, Houston, TX 77032',
      phone: '(713) 555-0456',
      hours: 'Daily: 6AM-11PM',
      airport: true
    },
    {
      state: 'Texas',
      city: 'Austin',
      address: '3600 Presidential Blvd, Austin, TX 78719',
      phone: '(512) 555-0789',
      hours: 'Mon-Sun: 6AM-12AM',
      airport: true
    },
    {
      state: 'Texas',
      city: 'San Antonio',
      address: '9800 Airport Blvd, San Antonio, TX 78216',
      phone: '(210) 555-0321',
      hours: 'Daily: 5AM-1AM',
      airport: true
    },
    {
      state: 'Florida',
      city: 'Miami',
      address: '2100 NW 42nd Ave, Miami, FL 33142',
      phone: '(305) 555-0654',
      hours: 'Daily: 24 Hours',
      airport: true
    },
    {
      state: 'Florida',
      city: 'Orlando',
      address: '1 Jeff Fuqua Blvd, Orlando, FL 32827',
      phone: '(407) 555-0987',
      hours: 'Daily: 5AM-2AM',
      airport: true
    },
    {
      state: 'Florida',
      city: 'Tampa',
      address: '4100 George J Bean Pkwy, Tampa, FL 33607',
      phone: '(813) 555-0147',
      hours: 'Daily: 5AM-1AM',
      airport: true
    },
    {
      state: 'Florida',
      city: 'Jacksonville',
      address: '14701 Airport Entrance Rd, Jacksonville, FL 32218',
      phone: '(904) 555-0258',
      hours: 'Daily: 6AM-12AM',
      airport: true
    },
    {
      state: 'Georgia',
      city: 'Atlanta',
      address: '6000 N Terminal Pkwy, Atlanta, GA 30320',
      phone: '(404) 555-0369',
      hours: 'Daily: 24 Hours',
      airport: true
    },
    {
      state: 'Georgia',
      city: 'Savannah',
      address: '400 Airways Ave, Savannah, GA 31408',
      phone: '(912) 555-0741',
      hours: 'Daily: 6AM-11PM',
      airport: true
    },
    {
      state: 'Georgia',
      city: 'Augusta',
      address: '1501 Aviation Way, Augusta, GA 30906',
      phone: '(706) 555-0852',
      hours: 'Mon-Fri: 7AM-7PM, Weekends: 8AM-6PM',
      airport: true
    },
    {
      state: 'Georgia',
      city: 'Columbus',
      address: '3250 W Britt David Rd, Columbus, GA 31909',
      phone: '(706) 555-0963',
      hours: 'Daily: 7AM-10PM',
      airport: true
    }
  ];

  const filteredLocations = locations.filter(location =>
    location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedLocations = filteredLocations.reduce((acc, location) => {
    if (!acc[location.state]) {
      acc[location.state] = [];
    }
    acc[location.state].push(location);
    return acc;
  }, {} as Record<string, typeof locations>);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pivoz Locations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find convenient Pivoz rental locations across Texas, Florida, and Georgia. 
            Most locations offer 24/7 smart access pickup and return.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by city or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Locations by State */}
        {Object.entries(groupedLocations).map(([state, stateLocations]) => (
          <div key={state} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-8 w-8 text-blue-600 mr-3" />
              {state}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateLocations.map((location, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900 flex items-center">
                      {location.city}
                      {location.airport && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                          Airport
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-2" />
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                    <Button className="w-full mt-4">
                      Reserve at This Location
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No locations found matching your search.</p>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Access Available</h3>
              <p className="text-gray-600">
                Most Pivoz locations feature contactless pickup and return with our innovative 
                smart access technology. Simply unlock your vehicle with the Pivoz app.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Need assistance? Our customer support team is available 24/7 to help with 
                any questions or issues during your rental experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;

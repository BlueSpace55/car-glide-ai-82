import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Car, Users, Luggage, Settings, Fuel, Shield, Wifi, Star, Filter } from 'lucide-react';

const CarsPage = () => {
  const [sortBy, setSortBy] = useState('recommended');
  const [filters, setFilters] = useState({
    carType: 'all',
    transmission: 'all',
    fuelType: 'all',
    priceRange: 'all'
  });

  const vehicles = [
    {
      id: 1,
      name: 'Nissan Versa or similar',
      category: 'Economy',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: 5,
      bags: 2,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', 'Power Steering'],
      pricePerDay: 29.99,
      totalPrice: 179.94,
      mileage: 'Unlimited',
      popular: true
    },
    {
      id: 2,
      name: 'Toyota Corolla or similar',
      category: 'Compact',
      image: '/images/Toyota Corolla.JPG',
      passengers: 5,
      bags: 2,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', 'Power Steering', 'Bluetooth'],
      pricePerDay: 34.99,
      totalPrice: 209.94,
      mileage: 'Unlimited'
    },
    {
      id: 3,
      name: 'Nissan Altima or similar',
      category: 'Intermediate',
      image: '/images/Nissan Altima.jpg',
      passengers: 5,
      bags: 3,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', 'Power Steering', 'Bluetooth', 'USB Ports'],
      pricePerDay: 39.99,
      totalPrice: 239.94,
      mileage: 'Unlimited'
    },
    {
      id: 4,
      name: 'Toyota Camry or similar',
      category: 'Standard',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: 5,
      bags: 3,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', 'Power Steering', 'Bluetooth', 'USB Ports', 'Backup Camera'],
      pricePerDay: 44.99,
      totalPrice: 269.94,
      mileage: 'Unlimited'
    },
    {
      id: 5,
      name: 'Chevrolet Impala or similar',
      category: 'Full Size',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: 5,
      bags: 4,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', 'Power Steering', 'Bluetooth', 'USB Ports', 'Backup Camera', 'Premium Audio'],
      pricePerDay: 49.99,
      totalPrice: 299.94,
      mileage: 'Unlimited'
    },
    {
      id: 6,
      name: 'BMW 3 Series or similar',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: 5,
      bags: 3,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', 'Leather Seats', 'Navigation', 'Premium Audio', 'Sunroof'],
      pricePerDay: 79.99,
      totalPrice: 479.94,
      mileage: 'Unlimited',
      luxury: true
    },
    {
      id: 7,
      name: 'Jeep Grand Cherokee or similar',
      category: 'SUV',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      passengers: 7,
      bags: 5,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', '4WD', 'Power Steering', 'Bluetooth', 'Backup Camera'],
      pricePerDay: 69.99,
      totalPrice: 419.94,
      mileage: 'Unlimited'
    },
    {
      id: 8,
      name: 'Ford Mustang Convertible or similar',
      category: 'Convertible',
      image: '/images/Ford Mustang.JPG',
      passengers: 4,
      bags: 2,
      transmission: 'Automatic',
      fuelType: 'Gas',
      features: ['A/C', 'Convertible Top', 'Premium Audio', 'Sport Package'],
      pricePerDay: 89.99,
      totalPrice: 539.94,
      mileage: 'Unlimited',
      specialty: true
    }
  ];

  const handleSelectVehicle = (vehicleId: number) => {
    console.log('Selected vehicle:', vehicleId);
    // Handle vehicle selection logic here
  };

  return (
    <div className="min-h-screen bg-green-500">
      {/* Header Section */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Select Your Vehicle</h1>
              <p className="text-muted-foreground mt-2">Choose from our wide selection of rental cars</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <Label htmlFor="sort">Sort by:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="category">Vehicle Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Filter Results</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="car-type text-sm hover:bg-gray-700">Car Type</Label>
                    <Select value={filters.carType} onValueChange={(value) => setFilters({...filters, carType: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all ">All Types</SelectItem>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="fullsize">Full Size</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="convertible">Convertible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="transmission">Transmission</Label>
                    <Select value={filters.transmission} onValueChange={(value) => setFilters({...filters, transmission: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="automatic">Automatic</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="fuel-type">Fuel Type</Label>
                    <Select value={filters.fuelType} onValueChange={(value) => setFilters({...filters, fuelType: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="gas">Gasoline</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="price-range">Price Range</Label>
                    <Select value={filters.priceRange} onValueChange={(value) => setFilters({...filters, priceRange: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="budget">Under $40/day</SelectItem>
                        <SelectItem value="mid">$40-$70/day</SelectItem>
                        <SelectItem value="premium">$70+/day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vehicle Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      {/* Vehicle Image */}
                      <div className="md:col-span-1">
                        <div className="relative">
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img 
                              src={vehicle.image} 
                              alt={vehicle.name}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          {vehicle.popular && (
                            <Badge className="absolute -top-2 -right-2 bg-secondary">
                              Most Popular
                            </Badge>
                          )}
                          {vehicle.luxury && (
                            <Badge className="absolute -top-2 -right-2 bg-accent">
                              Luxury
                            </Badge>
                          )}
                          {vehicle.specialty && (
                            <Badge className="absolute -top-2 -right-2 bg-primary">
                              Specialty
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Vehicle Details */}
                      <div className="md:col-span-2">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{vehicle.name}</h3>
                            <p className="text-gray-600">{vehicle.category}</p>
                          </div>

                          {/* Vehicle Specs */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-gray-500" />
                              <span>{vehicle.passengers} passengers</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Luggage className="h-4 w-4 text-gray-500" />
                              <span>{vehicle.bags} bags</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Settings className="h-4 w-4 text-gray-500" />
                              <span>{vehicle.transmission}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Fuel className="h-4 w-4 text-gray-500" />
                              <span>{vehicle.fuelType}</span>
                            </div>
                          </div>

                          {/* Features */}
                          <div>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <span>✓ {vehicle.mileage} mileage</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pricing & Selection */}
                      <div className="md:col-span-1">
                        <div className="text-right space-y-4">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">
                              ${vehicle.pricePerDay}/day
                            </div>
                            <div className="text-sm text-gray-600">
                              ${vehicle.totalPrice} total
                            </div>
                            <div className="text-xs text-gray-500">
                              (6-day rental)
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Button 
                              className="w-full bg-yellow-500 hover:bg-yellow-700"
                              onClick={() => handleSelectVehicle(vehicle.id)}
                            >
                              Select Vehicle
                            </Button>
                            <Button variant="outline" className="w-full text-sm hover:bg-gray-700">
                              View Details
                            </Button>
                          </div>

                          <div className="text-xs text-gray-500">
                            <div className="flex items-center gap-1 justify-end">
                              <Shield className="h-3 w-3" />
                              <span>Free cancellation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" className="text-sm hover:bg-gray-700">
                Load More Vehicles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;

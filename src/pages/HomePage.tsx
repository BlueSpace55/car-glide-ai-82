
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import RentalSearchForm from '@/components/RentalSearchForm';
import SmartAccessSection from '@/components/SmartAccessSection';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Car, MapPin, Quote } from 'lucide-react';

const HomePage = () => {
  const [specialsForm, setSpecialsForm] = useState({
    email: '',
    membershipType: ''
  });

  const carImages = [
    { src: '/images/Luxury Red Sports Car.JPG', alt: 'Luxury Red Sports Car' },
    { src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop', alt: 'Premium White SUV' },
    { src: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop', alt: 'Electric Blue Compact Car' },
    { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop', alt: 'Black Premium Sedan' },
  ];

  const popularLocations = [
    { name: 'Texas', image: '/images/texas road.JPG', description: 'Explore the Lone Star State' },
    { name: 'Florida', image: '/images/florida road.JPG', description: 'Sunshine and beaches await' },
    { name: 'Georgia', image: '/images/georgia road.JPG', description: 'Southern charm and hospitality' }
  ];

  const serviceHighlights = [
    {
      icon: Car,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
      title: 'Premium Fleet',
      description: 'From economy cars to luxury vehicles, find the perfect ride for your journey.'
    },
    {
      icon: Users,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      title: 'Smart Access',
      description: 'Contactless pickup with our innovative keyless entry systems.'
    },
    {
      icon: Star,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      title: 'AI-Powered',
      description: 'Dynamic pricing and personalized recommendations for the best experience.'
    }
  ];

  const customerReviews = [
    {
      name: 'Sarah Johnson',
      location: 'Dallas, TX',
      rating: 5,
      review: 'Pivoz made my business trip so much easier! The smart access feature saved me time, and the car was immaculate.',
      date: 'December 2024'
    },
    {
      name: 'Michael Chen',
      location: 'Miami, FL',
      rating: 5,
      review: 'Best car rental experience I\'ve ever had. The AI recommendations were spot-on, and the pricing was transparent.',
      date: 'November 2024'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Atlanta, GA',
      rating: 5,
      review: 'The contactless pickup was a game-changer. Professional service and premium vehicles at competitive rates.',
      date: 'December 2024'
    },
    {
      name: 'David Thompson',
      location: 'Houston, TX',
      rating: 4,
      review: 'Smooth rental process from start to finish. The fleet quality exceeded my expectations.',
      date: 'October 2024'
    }
  ];

  const handleSpecialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Specials signup:', specialsForm);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Rental Form */}
      <section className="relative bg-green-500 from-primary via-accent to-muted text-white py-16 md:py-32 overflow-hidden min-h-[90vh]">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
          style={{

            backgroundImage: "url('/images/nissan-altima.jpg')",  // renamed file without spaces
          }}>
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in leading-tight">
              Advanced Car Rental
              <br />
              <span className=" bg-yellow-500 bg-clip-text text-transparent mt-6">
                Reimagined
              </span>
              <br />
              <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                <span>Developer: Sasaki Taiki from Japan.</span>
                <br />
                <span>Contact email: sasakitaiki5555@gmail</span>
                <br />
                <span>Contact Telegram: @AIdev5055</span>
                <br />
                <span>Whats app: +1 (418) 801-9845</span>
              </h2>

            </h1>
            <br />
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
              Experience the future of car rental with AI-powered features, smart access systems, and personalized service.
            </p>
          </div>

          <div className="animate-scale-in">
            <RentalSearchForm />
          </div>
        </div>
      </section>

      {/* Car Carousel Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Premium Fleet
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our wide selection of vehicles for every journey
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {carImages.map((car, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={car.src}
                            alt={car.alt}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground">{car.alt}</h3>
                          <Button className="w-full  bg-yellow-500 hover:bg-gray-700">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Smart Access System Section */}
      <SmartAccessSection />

      {/* Service Highlights */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Pivoz?
            </h2>
            <p className="text-xl text-muted-foreground">
              Advanced technology meets exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="h-8 w-8 text-accent group-hover:text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from satisfied Pivoz customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerReviews.map((review, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 bg-card">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-primary mb-2" />
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? 'text-secondary fill-current' : 'text-muted'
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 flex-grow italic">"{review.review}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sign up for Specials */}
      <section className="py-16 bg-card bg-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-2 border-white/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Sign Up for Specials
                </h2>
                <p className="text-muted-foreground">
                  Choose your membership type and never miss exclusive offers
                </p>
              </div>

              <form onSubmit={handleSpecialsSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="specials-email">Email Address*</Label>
                    <Input
                      id="specials-email"
                      type="email"
                      placeholder="Enter your email"
                      value={specialsForm.email}
                      onChange={(e) => setSpecialsForm({ ...specialsForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="membership-type">Membership Type*</Label>
                    <Select value={specialsForm.membershipType} onValueChange={(value) => setSpecialsForm({ ...specialsForm, membershipType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select membership" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="renter">Renter</SelectItem>
                        <SelectItem value="gig-worker">Gig Worker</SelectItem>
                        <SelectItem value="founder">Founder</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-500 hover:bg-green-900">
                  Sign Up for Specials
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular US Locations
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing destinations across America
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularLocations.map((location, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.name} landscape`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{location.name}</h3>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-gray-500 group-hover:text-primary-foreground transition-colors">
                    Explore {location.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-500 from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Future of Car Rental?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who've upgraded their travel experience with Pivoz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/cars">
                View All Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-black bg-white border-white hover:bg-primary-foreground/10" asChild>
              <Link to="/signup">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

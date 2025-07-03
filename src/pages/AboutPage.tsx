
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Car, Users, Award, MapPin, Clock, Shield, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Smart Access Technology',
      description: 'Unlock and start your rental car using just your smartphone. No more waiting in lines or dealing with physical keys.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Experience',
      description: 'Our artificial intelligence system provides personalized recommendations and dynamic pricing for the best rental experience.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Insurance',
      description: 'Full coverage protection with transparent pricing. Drive with confidence knowing you\'re protected.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Pick up and return your vehicle anytime with our round-the-clock service at most locations.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '15', label: 'Locations' },
    { number: '500+', label: 'Premium Vehicles' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const teamValues = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best possible experience for our customers.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in vehicle quality, service delivery, and customer satisfaction.'
    },
    {
      icon: Car,
      title: 'Innovation',
      description: 'We continuously invest in cutting-edge technology to revolutionize the car rental experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Pivoz</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Revolutionizing car rental with advanced technology, premium vehicles, 
            and exceptional service across Texas, Florida, and Georgia.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to transform the car rental industry, Pivoz emerged from the simple 
                  belief that renting a car should be as easy as ordering a ride-share. We recognized that 
                  traditional car rental was plagued with long lines, paperwork, and outdated processes.
                </p>
                <p>
                  Starting in Texas and expanding to Florida and Georgia, we've built a network of premium 
                  rental locations that prioritize convenience, technology, and customer satisfaction. Our 
                  smart access technology eliminates traditional pain points, allowing customers to unlock 
                  and drive their rental car using just their smartphone.
                </p>
                <p>
                  Today, Pivoz serves thousands of customers across the Southeast, from business travelers 
                  who need reliable transportation to families planning their perfect vacation. We're not 
                  just a car rental company – we're your mobility partner.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Pivoz Different
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology meets personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where We Serve</h2>
            <p className="text-xl text-gray-600">
              Premium car rental services across three states
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Texas</h3>
                <p className="text-gray-600 mb-4">
                  Major cities including Dallas, Houston, Austin, and San Antonio. 
                  Airport and downtown locations available.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/locations">View Texas Locations</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Florida</h3>
                <p className="text-gray-600 mb-4">
                  Serving Miami, Orlando, Tampa, and Jacksonville with convenient 
                  airport and city center locations.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/locations">View Florida Locations</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Georgia</h3>
                <p className="text-gray-600 mb-4">
                  Atlanta metropolitan area and beyond, including Savannah, Augusta, 
                  and Columbus with smart access technology.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/locations">View Georgia Locations</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Pivoz?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who've discovered a better way to rent cars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/cars">Browse Our Fleet</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-blue-600 bg-white border-white hover:bg-blue-50" asChild>
              <Link to="/locations">Find a Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Zap, Heart, Globe, Award, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const differentiators = [
    {
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center',
      title: 'Smart Technology',
      description: 'AI-powered recommendations, dynamic pricing, and contactless pickup make renting effortless and personalized.'
    },
    {
      icon: Users,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center',
      title: 'Customer-First Approach',
      description: 'We prioritize your experience with 24/7 support, transparent pricing, and premium vehicle maintenance.'
    },
    {
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&crop=center',
      title: 'Innovation & Reliability',
      description: 'Cutting-edge fleet management combined with proven reliability ensures you get the best of both worlds.'
    }
  ];

  const values = [
    {
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&crop=center',
      title: 'Customer Excellence',
      description: 'Every decision we make is centered around delivering exceptional experiences for our customers.'
    },
    {
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center',
      title: 'Innovation Leadership',
      description: 'We continuously push boundaries with technology to redefine what car rental can be.'
    },
    {
      icon: Award,
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&crop=center',
      title: 'Quality & Trust',
      description: 'We maintain the highest standards in vehicle quality, service delivery, and customer relationships.'
    }
  ];

  const serviceAreas = [
    {
      name: 'Texas',
      image: '/images/texas road.JPG',
      description: 'Serving major cities including Dallas, Houston, Austin, and San Antonio with premium rental services.',
      cities: ['Dallas', 'Houston', 'Austin', 'San Antonio']
    },
    {
      name: 'Florida',
      image: '/images/florida road.JPG',
      description: 'Complete coverage across Florida including Miami, Orlando, Tampa, and Jacksonville.',
      cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville']
    },
    {
      name: 'Georgia',
      image: '/images/georgia road.JPG',
      description: 'Strategic locations in Atlanta, Savannah, Augusta, and Columbus for your convenience.',
      cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus']
    }
  ];

  return (
    <div className="min-h-screen bg-green-500">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-green-500 from-primary via-accent to-muted text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Pivoz
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Revolutionizing car rental through advanced technology, exceptional service, 
            and a commitment to making your journey seamless.
          </p>
        </div>
      </section>

      {/* What Makes Pivoz Different */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Pivoz Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another car rental company. We're pioneering the future of mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon className="h-8 w-8 text-accent group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Pivoz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-secondary rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon className="h-8 w-8 text-accent group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where We Serve */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bringing premium car rental services to key markets across the United States.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={`${area.name} landscape`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" />
                    {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{area.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Major Cities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.cities.map((city, cityIndex) => (
                        <span 
                          key={cityIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:text-primary-foreground transition-colors hover:bg-gray-700" asChild>
                    <Link to="/locations">
                      View Locations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Founded with a vision to transform the car rental industry, Pivoz emerged from the belief 
                  that technology should make travel more convenient, not more complicated.
                </p>
                <p>
                  Our journey began when we recognized the gap between what customers expected and what 
                  traditional rental companies delivered. Long lines, paperwork, and uncertainty became 
                  the catalysts for our innovation.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers across Texas, Florida, and Georgia, 
                  offering a seamless blend of cutting-edge technology and personalized service that 
                  sets new standards in the industry.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-500 from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Pivoz Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join us in revolutionizing your travel experience with smart technology and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/cars">
                Browse Our Fleet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-primary bg-white border-white hover:bg-primary-foreground/10" asChild>
              <Link to="/locations">Find Locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

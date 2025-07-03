
import { Car, Linkedin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const legalLinks = [
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Consumer Health Data Privacy Statement', href: '/health-privacy' },
    { name: 'Privacy Choices', href: '/privacy-choices' },
    { name: 'AdChoices', href: '/adchoices' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Pivoz</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced car rental platform with AI-powered features, smart access systems, and personalized experiences for the modern traveler.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/locations/texas" className="text-gray-400 hover:text-white transition-colors">
                  Texas
                </Link>
              </li>
              <li>
                <Link to="/locations/florida" className="text-gray-400 hover:text-white transition-colors">
                  Florida
                </Link>
              </li>
              <li>
                <Link to="/locations/georgia" className="text-gray-400 hover:text-white transition-colors">
                  Georgia
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-white transition-colors">
                  Car Rental
                </Link>
              </li>
              <li>
                <Link to="/smart-access" className="text-gray-400 hover:text-white transition-colors">
                  Smart Access System
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-400 hover:text-white transition-colors">
                  Membership Programs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
            {legalLinks.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link
                  to={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="ml-4 text-gray-600">|</span>
                )}
              </span>
            ))}
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © 2025 Pivoz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

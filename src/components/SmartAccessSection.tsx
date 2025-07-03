
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Key, Wifi, Shield } from 'lucide-react';

const SmartAccessSection = () => {
  const accessSystems = [
    {
      icon: Key,
      title: 'Smart Lockbox Kit (Universal Option)',
      description: 'A lockbox with a Bluetooth smart lock that holds the car\'s key fob inside. Renters unlock it through the app (via BLE or temporary code). Works with any car year, no need to modify the car itself. Low cost, simple install ideal for 95% of your users.',
      features: ['Universal compatibility', 'Bluetooth enabled', 'Temporary access codes', 'Easy installation']
    },
    {
      icon: Wifi,
      title: 'OBD-II Keyless Tech (For Newer Cars)',
      description: 'For 2015+ cars: you offer an optional OBD-II dongle that gives remote lock/unlock and start. Use partners like Carmine, Turo Go, or Smartcar APIs to power this. Advanced users or fleets can install this to enable "true" keyless.',
      features: ['2015+ vehicle compatibility', 'Remote lock/unlock', 'Remote start capability', 'API integration']
    },
    {
      icon: Smartphone,
      title: 'NFC Key Tags (Add-on for iOS & Android)',
      description: 'A small NFC tag or QR code inside windshield lets verified renters tap their phone and access the car. Does not require any major hardware install. Smooth, user-friendly experience.',
      features: ['NFC & QR code support', 'iOS & Android compatible', 'No hardware installation', 'Seamless user experience']
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Hybrid Smart-Access System (HSS)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A flexible solution for all vehicle types - from 2005 Hondas to 2025 Teslas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessSystems.map((system, index) => {
            const Icon = system.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{system.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {system.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {system.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Shield className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SmartAccessSection;

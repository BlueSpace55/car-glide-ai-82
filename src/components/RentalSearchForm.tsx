
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Clock, User, Tag } from 'lucide-react';

const RentalSearchForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    driverAge: '',
    promoCode: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search form submitted:', formData);
    // Handle form submission
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg" style={{ backgroundColor: '#ccffcc' }}>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickup-location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                Pick-up Location*
              </Label>
              <Input
                id="pickup-location"
                placeholder="Enter pick-up location"
                value={formData.pickupLocation}
                onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dropoff-location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                Drop-off Location*
              </Label>
              <Input
                id="dropoff-location"
                placeholder="Enter drop-off location"
                value={formData.dropoffLocation}
                onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Date and Time Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pickup-date" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  Pick-up Date*
                </Label>
                <Input
                  id="pickup-date"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pickup-time" className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  Pick-up Time*
                </Label>
                <Input
                  id="pickup-time"
                  type="time"
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dropoff-date" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  Drop-off Date*
                </Label>
                <Input
                  id="dropoff-date"
                  type="date"
                  value={formData.dropoffDate}
                  onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dropoff-time" className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-600" />
                  Drop-off Time*
                </Label>
                <Input
                  id="dropoff-time"
                  type="time"
                  value={formData.dropoffTime}
                  onChange={(e) => setFormData({ ...formData, dropoffTime: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>

          {/* Driver Age and Promo Code */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="driver-age" className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                Driver Age*
              </Label>
              <Select value={formData.driverAge} onValueChange={(value) => setFormData({ ...formData, driverAge: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="18-24">18-24</SelectItem>
                  <SelectItem value="25-29">25-29</SelectItem>
                  <SelectItem value="30-49">30-49</SelectItem>
                  <SelectItem value="50-64">50-64</SelectItem>
                  <SelectItem value="65+">65+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="promo-code" className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-blue-600" />
                Promotion Code
              </Label>
              <Input
                id="promo-code"
                placeholder="Enter promo code (optional)"
                value={formData.promoCode}
                onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-900 text-lg py-6">
            Reserve Your Car
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RentalSearchForm;

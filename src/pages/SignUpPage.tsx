
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // My Profile
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    
    // Contact Details
    country: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    state: '',
    zipCode: '',
    primaryPhoneType: '',
    primaryPhoneNumber: '',
    altPhoneType: '',
    altPhoneNumber: '',
    
    // Driver's License
    issuingCountry: 'USA',
    issuingAuthority: '',
    birthDate: '',
    licenseNumber: '',
    expirationDate: '',
    
    // Preferences
    emailSpecials: false,
    acceptTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChars = (password.match(/[^a-zA-Z0-9]/g) || []).length >= 2;
    
    return { hasMinLength, hasLetter, hasNumber, hasSpecialChars };
  };

  const passwordValidation = validatePassword(formData.password);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up form submitted:', formData);
    // TODO: Implement sign up logic
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            step === currentStep ? 'bg-blue-600 text-white' : 
            step < currentStep ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {step}
          </div>
          {step < 4 && <div className={`w-12 h-1 ${step < currentStep ? 'bg-green-600' : 'bg-gray-200'}`} />}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">My Profile</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label htmlFor="confirmEmail">Confirm Email Address *</Label>
        <Input
          id="confirmEmail"
          name="confirmEmail"
          type="email"
          required
          value={formData.confirmEmail}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label htmlFor="password">Password *</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="mt-2 text-sm space-y-1">
          <div className={passwordValidation.hasMinLength ? 'text-green-600' : 'text-gray-500'}>
            ✓ must be at least 8 characters
          </div>
          <div className={passwordValidation.hasLetter ? 'text-green-600' : 'text-gray-500'}>
            ✓ must contain a letter
          </div>
          <div className={passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-500'}>
            ✓ must contain a number
          </div>
          <div className={passwordValidation.hasSpecialChars ? 'text-green-600' : 'text-gray-500'}>
            ✓ must contain more than one special character
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
      
      <div>
        <Label htmlFor="country">Country of Residence</Label>
        <Select onValueChange={(value) => handleSelectChange('country', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="streetAddress1">Street Address 1 *</Label>
        <Input
          id="streetAddress1"
          name="streetAddress1"
          required
          value={formData.streetAddress1}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label htmlFor="streetAddress2">Street Address 2 (Optional)</Label>
        <Input
          id="streetAddress2"
          name="streetAddress2"
          value={formData.streetAddress2}
          onChange={handleInputChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="state">State *</Label>
          <Input
            id="state"
            name="state"
            required
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="zipCode">ZIP Code *</Label>
        <Input
          id="zipCode"
          name="zipCode"
          required
          value={formData.zipCode}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label>Primary Phone Number *</Label>
        <div className="flex gap-2">
          <Select onValueChange={(value) => handleSelectChange('primaryPhoneType', value)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Input
            name="primaryPhoneNumber"
            placeholder="Phone number"
            value={formData.primaryPhoneNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <Label>Alternative Phone Number (Optional)</Label>
        <div className="flex gap-2">
          <Select onValueChange={(value) => handleSelectChange('altPhoneType', value)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="mobile">Mobile</SelectItem>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Input
            name="altPhoneNumber"
            placeholder="Phone number"
            value={formData.altPhoneNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Driver's License Details</h3>
      
      <div>
        <Label htmlFor="issuingCountry">Issuing Country *</Label>
        <Select value={formData.issuingCountry} onValueChange={(value) => handleSelectChange('issuingCountry', value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USA">USA</SelectItem>
            <SelectItem value="Canada">Canada</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="issuingAuthority">Issuing Authority *</Label>
        <Select onValueChange={(value) => handleSelectChange('issuingAuthority', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select authority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dmv">Department of Motor Vehicles</SelectItem>
            <SelectItem value="dps">Department of Public Safety</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="birthDate">Birth Date (MM/DD/YYYY) *</Label>
        <Input
          id="birthDate"
          name="birthDate"
          type="date"
          required
          value={formData.birthDate}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label htmlFor="licenseNumber">Driver's License Number *</Label>
        <Input
          id="licenseNumber"
          name="licenseNumber"
          required
          value={formData.licenseNumber}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <Label htmlFor="expirationDate">Expiration Date (MM/DD/YYYY) *</Label>
        <Input
          id="expirationDate"
          name="expirationDate"
          type="date"
          required
          value={formData.expirationDate}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Preferences</h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox 
            id="emailSpecials"
            checked={formData.emailSpecials}
            onCheckedChange={(checked) => handleSelectChange('emailSpecials', checked as boolean ? 'true' : 'false')}
          />
          <div>
            <Label htmlFor="emailSpecials" className="font-medium">Email Specials (Optional)</Label>
            <p className="text-sm text-gray-600 mt-1">
              Sign up for Enterprise Email Specials
            </p>
            <p className="text-xs text-gray-500 mt-2">
              By selecting this box, you would like to receive email promotions and offers from Pivoz (as well as affiliated entities). 
              You also agree that we can use your information and interactions with emails to perform analytics and produce content 
              and ads tailored to your interests. You may see these tailored advertisements and offers on non-Enterprise sites, 
              including on social media and digital advertising platforms. Please understand that there is no charge and that you 
              can unsubscribe at any time by (i) using the links provided in the emails, (ii) managing your preferences in your 
              Enterprise Plus profile or (iii) contacting us. Please consult our Privacy Policy and our Cookie Policy to find out more.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox 
            id="acceptTerms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => handleSelectChange('acceptTerms', checked as boolean ? 'true' : 'false')}
            required
          />
          <Label htmlFor="acceptTerms" className="font-medium">
            I have read and accept Pivoz Terms & Conditions *
          </Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-green-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-900">
              Sign Up for Pivoz
            </CardTitle>
            {renderStepIndicator()}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
              {currentStep === 4 && renderStep4()}

              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button type="button" variant="outline" onClick={prevStep} className="hover:bg-gray-500">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
                
                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep} className="ml-auto bg-green-500 hover:bg-green-900">
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto">
                    Create Account
                  </Button>
                )}
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;

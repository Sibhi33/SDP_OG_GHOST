import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Separator } from '@/components/ui/separator';

const Register = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!roll) newErrors.roll = 'School ID is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors means the form is valid
  };

  const handleCreateAccount = () => {
    if (validateForm()) {
      // Redirect to login page if form is valid
      navigate('/login');
    }
  };

  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-4 opacity-90' style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className='flex-grow'></div> {/* Spacer */}
      <Card 
        className="w-full sm:w-2/6 max-h-[600px]" 
        style={{
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
          backdropFilter: 'blur(10px)', // Glass effect
          borderRadius: '12px', // Rounded corners
          border: '1px solid rgba(255, 255, 255, 0.3)', // Optional subtle border
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardHeader className="pt-4 px-6 space-y-2">
          <CardTitle className="text-4xl mb-2">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-6 grid gap-4 overflow-auto">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Alpha" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="roll">Organization ID</Label>
            <Input 
              id="roll" 
              type="text" 
              placeholder="AS1234" 
              value={roll} 
              onChange={(e) => setRoll(e.target.value)} 
              className={errors.roll ? 'border-red-500' : ''}
            />
            {errors.roll && <p className="text-red-500 text-sm">{errors.roll}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="user@cb.ai" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="******" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4 pb-4">
          <Button 
            className="w-full max-w-sm bg-gradient-to-r from-green-400 to-violet-300 text-white focus:outline-none rounded transition duration-150 hover:from-green-500 hover:to-violet-400"
            onClick={handleCreateAccount} // Attach click handler
          >
            Create account
          </Button>
          <Separator className="font-extrabold w-full max-w-sm bg-white" />
          <Button
            className="w-full max-w-sm flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition duration-150"
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2 text-lg" />
            Sign in with Google
          </Button>
        </CardFooter>
      </Card>
      <div className='flex-grow'></div> {/* Spacer */}
    </div>
  );
};

export default Register;

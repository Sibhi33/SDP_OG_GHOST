import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleGoogleSignIn = () => {
       
    };

    const handleSignUpRedirect = () => {
        navigate('/register'); 
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6; 
    };

    const handleLogin = () => {
        let valid = true;
        let emailError = '';
        let passwordError = '';

        if (!validateEmail(email)) {
            emailError = 'Uh oh! Invalid email format';
            valid = false;
        }

        if (!validatePassword(password)) {
            passwordError = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors({ email: emailError, password: passwordError });

        if (valid) {
           
            navigate('/'); 
        }
    };

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center opacity-85 gap-4' style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto flex flex-col justify-center items-center p-8" style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                background: 'rgba(255, 255, 255, 0.2)', 
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.3)', 
                paddingTop: '2rem',
                paddingBottom: '1.5rem', 
            }}>
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-extrabold">- L O G I N -</CardTitle>
                    <CardDescription>
                        Enter your email and password to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="user@everisk.ai"
                            aria-label="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="hover:placeholder-opacity-100"
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="******"
                            aria-label="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="hover:placeholder-opacity-100"
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                </CardContent>
                <CardFooter className="w-full flex flex-col gap-2">
                    <Button
                        className="w-full bg-gradient-to-r from-green-400 to-violet-300 focus:outline-none rounded transition duration-100 text-white font-semibold text-lg hover:from-green-500 hover:to-violet-400"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
            <div className="flex flex-col items-center mt-4 w-full">
                <Label className="mb-2">Not with us yet?</Label>
                <Button
                    className="w-40 bg-gradient-to-r from-blue-400 to-purple-300 text-white focus:outline-none rounded transition duration-150 hover:from-blue-500 hover:to-purple-400"
                    onClick={handleSignUpRedirect}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default Login;


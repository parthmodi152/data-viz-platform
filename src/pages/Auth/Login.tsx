
import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const Login: React.FC = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || '/';

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      await signIn(values.email, values.password);
      // Navigate to the page they were trying to access, or home
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      // Error handled by AuthContext toast
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await signInWithGoogle();
      // No navigation here as we're being redirected to Google
    } catch (error) {
      console.error("Google login error:", error);
      // Error handled by AuthContext toast
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#161618]">
      <Card className="w-[400px] bg-[#242424] border-[#5A5A5A] text-white">
        <CardHeader>
          <CardTitle className="text-[32px] font-bold text-green-2 text-center">Log In</CardTitle>
          <CardDescription className="text-gray-300 text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            className="w-full bg-white text-black hover:bg-gray-200 flex items-center justify-center gap-2"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
            type="button"
          >
            {isGoogleLoading ? (
              <span className="flex items-center">
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></span>
                Connecting...
              </span>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Sign in with Google</span>
              </>
            )}
          </Button>
          
          <div className="flex items-center my-4">
            <Separator className="flex-1 bg-[#5A5A5A]" />
            <span className="px-2 text-gray-400">OR</span>
            <Separator className="flex-1 bg-[#5A5A5A]" />
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        {...field} 
                        className="bg-[#1A1A1C] border-[#5A5A5A] text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••" 
                          {...field} 
                          className="bg-[#1A1A1C] border-[#5A5A5A] text-white pr-10"
                        />
                        <Button 
                          type="button"
                          variant="ghost" 
                          size="icon"
                          className="absolute right-0 top-0 h-full text-gray-400 hover:text-white"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-green-2 text-black hover:bg-[#b3e830]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></span>
                    Signing in...
                  </span>
                ) : (
                  "Sign In with Email"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-green-2 hover:underline">
              Create one
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

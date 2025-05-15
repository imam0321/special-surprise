"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";

const RegisterPage = () => {
  const registerForm = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 pb-10">
      <div className="w-full max-w-md">
        <Card className="w-full border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Create an Account
            </CardTitle>
            <CardDescription className="text-center">
              Fill in the form below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...registerForm}>
              <form className="space-y-4">
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="input-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          {...field}
                          className="input-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                          className="input-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                          className="input-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-surprise-pink hover:bg-pink-500 text-white font-bold"
                  disabled={registerForm.formState.isSubmitting}
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Link
              href="/auth/login"
              className="w-full text-center text-surprise-pink hover:underline"
            >
              Already have an account? Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;

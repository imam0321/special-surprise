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
import { LogIn } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 pb-22">
      <div className="w-full max-w-md">
        <Card className="w-full border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Log In</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...loginForm}>
              <form className="space-y-4">
                <FormField
                  control={loginForm.control}
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
                  control={loginForm.control}
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
                <Button
                  type="submit"
                  className="w-full text-center bg-surprise-pink hover:bg-pink-500 text-white font-bold"
                  disabled={loginForm.formState.isSubmitting}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Log In
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Link
              href="/auth/register"
              className="w-full text-center text-surprise-pink hover:underline"
            >
              Don't have an account? Register
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

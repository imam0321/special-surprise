import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center bg-accent/30 py-16">
        <div className="text-center px-4">
          <div className="mb-6 relative inline-block">
            <div className="text-8xl md:text-9xl font-bold gradient-text">
              404
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-10 text-surprise-pink">
              🎁
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Surprise Not Found
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! It looks like the surprise you're looking for has vanished.
            Let's help you find your way back.
          </p>
          <Button
            className="text-white bg-gradient-to-r from-surprise-pink to-surprise-purple hover:opacity-90 btn-bounce"
            size="lg"
          >
            <Home className="mr-2" size={18} /> <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

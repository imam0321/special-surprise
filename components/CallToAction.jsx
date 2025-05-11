import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-surprise-pink to-surprise-purple py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create a Special Moment?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Start planning your perfect surprise today and make unforgettable memories with your loved ones.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-surprise-purple hover:bg-white/90 btn-bounce">
            Browse Surprises <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 btn-bounce">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
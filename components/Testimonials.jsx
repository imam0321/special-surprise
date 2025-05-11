import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    avatar: "SA",
    role: "Birthday Celebrant",
    content: "I was completely surprised when the beautiful balloon bouquet arrived at my office! My colleagues were as amazed as I was. Thank you for making my day so special!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Khan",
    avatar: "RK",
    role: "Anniversary Surprise",
    content: "I ordered the anniversary package for my wife and she was in tears (happy ones!). The attention to detail and timing was perfect. Will definitely use again!",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Sharma",
    avatar: "PS",
    role: "Regular Customer",
    content: "I've used Special Surprise multiple times for different occasions, and they never disappoint. The quality of their products and service is consistently excellent.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experience with Special Surprise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-primary mr-4">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.id}`} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-surprise-yellow fill-surprise-yellow" 
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
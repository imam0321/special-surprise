import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, ShoppingCart } from "lucide-react";

const surprises = [
  {
    id: 1,
    title: "Birthday Balloon Surprise",
    description: "Colorful balloon bouquet with personalized message and treats.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: true,
    rating: 4.9
  },
  {
    id: 2,
    title: "Anniversary Rose Box",
    description: "Elegant box of premium roses with champagne and chocolates.",
    price: 5500,
    image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false,
    rating: 4.8
  },
  {
    id: 3,
    title: "Surprise Room Decoration",
    description: "Transform any space into a magical surprise with our decoration service.",
    price: 8000,
    image: "https://images.unsplash.com/photo-1515095184717-54d2d508ad84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: true,
    rating: 5.0
  },
  {
    id: 4,
    title: "Custom Gift Hamper",
    description: "Handcrafted gift hamper with personalized items of your choice.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    popular: false,
    rating: 4.7
  }
];

const FeaturedSurprises = () => {
  return (
    <div className="bg-gradient-to-b from-background to-accent/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Surprises</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular surprise options loved by customers. Perfect for any occasion and guaranteed to bring joy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {surprises.map(surprise => (
            <Card
              key={surprise.id}
              className="flex flex-col justify-between h-full overflow-hidden hover:shadow-lg transition-shadow group border border-gray-200 py-0"
            >
              <div className="relative">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={surprise.image}
                    alt={surprise.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                {surprise.popular && (
                  <Badge className="absolute top-3 right-3 text-white font-bold bg-surprise-pink hover:bg-surprise-pink">
                    Popular
                  </Badge>
                )}
                <button className="absolute top-3 left-3 bg-white/80 hover:bg-white rounded-full p-2 transition-colors">
                  <Heart size={18} className="text-surprise-pink" />
                </button>
              </div>

              <div className="flex flex-col flex-grow px-4">
                <CardHeader className="py-2 px-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{surprise.title}</h3>
                    <div className="flex items-center">
                      <Star size={16} className="text-surprise-yellow fill-surprise-yellow" />
                      <span className="text-sm ml-1">{surprise.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-0 py-1 flex-grow">
                  <p className="text-sm text-muted-foreground">{surprise.description}</p>
                </CardContent>

                <CardFooter className="px-0 pt-1 pb-4 flex justify-between items-center mt-auto">
                  <div className="font-bold">৳{surprise.price.toLocaleString()}</div>
                  <Button size="sm" className="text-white bg-surprise-purple hover:bg-surprise-purple/90 btn-bounce">
                    <ShoppingCart size={16} className="mr-1" /> Add
                  </Button>
                </CardFooter>
              </div>
            </Card>

          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-surprise-purple text-surprise-purple hover:bg-surprise-purple/10 btn-bounce">
            View All Surprises
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSurprises;
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Gift, Package, Users } from "lucide-react";


const ProductsStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="border-gray-200">
        <CardContent className="flex items-center p-6">
          <div className="bg-surprise-pink/10 p-4 rounded-full mr-4">
            <Package size={24} className="text-surprise-pink" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Products</p>
            <h3 className="text-2xl font-bold">125</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardContent className="flex items-center p-6">
          <div className="bg-surprise-purple/10 p-4 rounded-full mr-4">
            <Users size={24} className="text-surprise-purple" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Customers</p>
            <h3 className="text-2xl font-bold">842</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardContent className="flex items-center p-6">
          <div className="bg-green-100 p-4 rounded-full mr-4">
            <DollarSign size={24} className="text-green-500" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Revenue</p>
            <h3 className="text-2xl font-bold">$24,780</h3>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardContent className="flex items-center p-6">
          <div className="bg-amber-100 p-4 rounded-full mr-4">
            <Gift size={24} className="text-amber-500" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Active Orders</p>
            <h3 className="text-2xl font-bold">38</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsStats;
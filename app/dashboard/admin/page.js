import {
  Settings,
  Plus,
} from "lucide-react";
import Link from "next/link";
import ProductsStats from "./_components/ProductsStats";
import OrdersStats from "./_components/OrdersStats";

const AdminDashboardPage = () => {
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Link
              href="/dashboard/admin/setting"
              className="flex justify-center items-center rounded border border-gray-200 px-2 py-1"
            >
              <Settings size={16} className="mr-2" /> Dashboard
            </Link>
            <Link
              href="/dashboard/admin/add-products"
              className="flex justify-center items-center text-white rounded bg-surprise-pink hover:bg-surprise-purple px-2 py-1"
            >
              <Plus size={16} className="mr-2" /> New Product
            </Link>
          </div>
        </div>
        {/* ProductsStats  */}
        <ProductsStats />
        {/* Orders stats */}
        <OrdersStats />
      </div>
    </div>
  );
};

export default AdminDashboardPage;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";


const OrdersStats = () => {
  // Mock data for demonstration
  const recentOrders = [
    {
      id: "#3210",
      customer: "Jane Cooper",
      date: "2025-05-11",
      status: "Delivered",
      amount: "$250.00",
    },
    {
      id: "#3209",
      customer: "Wade Warren",
      date: "2025-05-10",
      status: "Pending",
      amount: "$120.00",
    },
    {
      id: "#3208",
      customer: "Esther Howard",
      date: "2025-05-09",
      status: "Processing",
      amount: "$350.00",
    },
    {
      id: "#3207",
      customer: "Leslie Alexander",
      date: "2025-05-08",
      status: "Delivered",
      amount: "$175.00",
    },
    {
      id: "#3206",
      customer: "Jenny Wilson",
      date: "2025-05-07",
      status: "Cancelled",
      amount: "$220.00",
    },
  ];
  return (
    <Card className="mb-8 border-gray-200">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of recent surprise orders.</TableCaption>
          <TableHeader>
            <TableRow className="border-gray-300">
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id} className="border-gray-200">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Pending"
                          ? "bg-amber-100 text-amber-800"
                          : order.status === "Processing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                      }`}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 mr-2 border-gray-200"
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-700 border-gray-200"
                  >
                    <Trash size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersStats;
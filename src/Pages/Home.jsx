
import StockDetails from "../components/HomePage/StockDetails";
import TotalMoney from "../components/HomePage/TotalMoney";
import TotalOrders from "../components/HomePage/TotalOrders";

export default function Home() {
  return (
    <div>
      <StockDetails></StockDetails>
      <TotalOrders></TotalOrders> 
      <TotalMoney></TotalMoney>
    </div>
  );
}

import { useContext } from "react";
import { Bar,Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { CustomerContext } from "./Context/Customer.context";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function TransactionChart() {
  const { transactions, selectedCustomer,customers } = useContext(CustomerContext);


  
  if (!selectedCustomer) return null;

  const customerTransactions = transactions.filter(
    (transaction) => transaction.customer_id == selectedCustomer.id
  );
  console.log(customerTransactions);
  const dates = customerTransactions.map((transaction) => transaction.date);
  const amounts = customerTransactions.map((transaction) => transaction.amount);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Transaction Amount",
        data: amounts,
        borderColor: "rgba(0, 0, 0)",
        borderWidth: 2,
      },
    ],
  };



  return (
    <div className="items-center text-center my-5 rounded-xl w-full  bg-white">
      <h2 className="text-xl font-bold m-4 p-5">
        {selectedCustomer.name}
        <span className="rounded-md  text-white py-1 px-2">{selectedCustomer.name}</span>
      </h2>
      <Line className="w-16 p-3" data={data} />
    </div>
  );
}

export default TransactionChart;

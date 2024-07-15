import { CustomerProvider } from "./Context/Customer.context";
import CustomerTable from "./CustomerTable";
import CustomerChart from "./CustomerChart";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
     <div className="bg-gray-300	">
      <CustomerProvider>
        <div className="container mx-auto p-4 min-h-[80vh]">
          <CustomerTable />
          <CustomerChart />
        </div>
      </CustomerProvider>
      </div>
    </>
  );
}

export default App;


import { useContext, useState } from "react";
import { CustomerContext } from "./Context/Customer.context";

function CustomerTable() {
  const { customers, transactions, setSelectedCustomer } =
    useContext(CustomerContext);
  const [search, setSearch] = useState("");
  const [amountFilter, setAmountFilter] = useState("");

  const filteredCustomers = customers.filter((customer) => {
    const customerTransactions = transactions.filter(
      (transaction) => transaction.customer_id == customer.id
    );
    const total = customerTransactions.reduce(
      (sum, transaction) => sum + transaction.amount,
      0
    );

    return (
      customer.name.toLowerCase().includes(search.toLowerCase()) &&
      (!amountFilter || total >= amountFilter)
    );
  });

  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-5">Statistics</h2>
      <div className="flex flex-row gap-3">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" form-control border-none"
      />
      <input
        type="number"
        placeholder="Filter by amount"
        value={amountFilter}
        onChange={(e) => setAmountFilter(e.target.value)}
        className=" form-control border-none h-10"
      />
      </div>
      <table className="items-center text-center my-5 rounded-xl w-full  bg-white">
        <thead >
          <tr>
            <th className="p-3" >Customer Name</th>
            <th className="p-3">Total Transactions</th>
            <th className="p-3">Graphs</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => {
            const customerTransactions = transactions.filter(
              (transaction) => transaction.customer_id == customer.id
            );
            const total = customerTransactions.reduce(
              (sum, transaction) => sum + transaction.amount,
              0
            );

            return (
              <tr key={customer.id} className="font-medium">
                <td className="p-3">{customer.name}</td>
                <td className="p-3">{total}</td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      setSelectedCustomer(customer);
                      console.log(customer);
                    }}
                    className=" bg-black text-white rounded-lg   font-semibold px-4 py-2"
                    
                  >
                    Show Graph
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
}

export default CustomerTable;
        

        

        
       



  
 

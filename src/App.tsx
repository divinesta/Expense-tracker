import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
   const [expenses, setExpenses] = useState([
      { id: 1, description: "bulbs", amount: 10, category: "Utilities" },
      { id: 2, description: "yam", amount: 10, category: "Groceries" },
      { id: 6, description: "rice & beans", amount: 10, category: "Utilities" },
   ]);

   return (
      <div className="container-md">
         <ExpenseList
            expenses={expenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
         />
      </div>
   );
}

export default App;

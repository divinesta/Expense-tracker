import { useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";

function App() {
   const [selectedCategory, setSelectedCategory] = useState("")
   const [expenses, setExpenses] = useState([
      { id: 1, description: "bulbs", amount: 10, category: "Utilities" },
      { id: 2, description: "yam", amount: 10, category: "Groceries" },
      { id: 6, description: "rice & beans", amount: 10, category: "Utilities" },
   ]);

   const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

   return (
      <div className="container-md">
         <div className="mb-3">
            <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
         </div>
         <ExpenseList
            expenses={visibleExpenses}
            onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
         />
      </div>
   );
}

export default App;

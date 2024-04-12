import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={startEditingHandler}>Add New Expenses</button>
    </div>
  );
};

export default NewExpense;

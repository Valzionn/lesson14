import { ChangeEvent, useEffect, useState } from 'react'

type Expense = {
  id: number;
  name: string;
  cost: number;
}

const getExpenses = async (): Promise<Expense[]> => {
  const res = await fetch('http://localhost:3001/api/expenses')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const response = await res.json()
  return response
}

const ExpenseIds = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const fetchExpenses = async () => {
   try {
    const fetchedExpenses = await getExpenses()
    setExpenses(fetchedExpenses)
   } catch (error) {
    console.error('Error fetching expenses')
   }
  }
  

  useEffect(() => {
    fetchExpenses()
  }, [])

  return (
    <div className='m-10'>
      <div className='mb-4'>
        <p>Expenses:</p>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>{expense.name} - {expense.cost} kr.</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExpenseIds

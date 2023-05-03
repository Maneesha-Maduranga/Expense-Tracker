import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
import ShowArea from "./components/ShowArea";

function App() {

  const [select,setSelect] = useState('')

  const [expences, setExpences] = useState([
    { id: 1, title: "Movie", price: 54, catergory: "Family" },
    { id: 2, title: "JEllu", price: 54, catergory: "Family" },
    { id: 3, title: "Movzie", price: 54, catergory: "Entertainment" },
    { id: 4, title: "Movdwie", price: 54, catergory: "Entertainment" },
  ]);

  // Remove Expences
  const onDelete = (id:number) => {
    setExpences(expences.filter(item => item.id !== id))
  }
  // Fillter Expences
  const fillterExpences = (title:string) => {
    setSelect(title)
  }

  const queary = select ? expences.filter(item => item.catergory === select) : expences


  return (
    <>
      <header>
        <Navbar navHeading='Expense Tracker' />
      </header>
      <main className='container'>
        <Intro />
        <ExpenseForm />
        <hr />
        <Selection onChange={(name) => {fillterExpences(name)}}/>
        <ShowArea expences={queary} onSelect={(id)=>{onDelete(id)}}/>
      </main>
    </>
  );
}

export default App;

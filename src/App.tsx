import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
import ShowArea from "./components/ShowArea";

function App() {

  const [select,setSelect] = useState('')

  const [expences, setExpences] = useState([
    { id: 1, title: "Pay Electicity Bill", price: 2500, catergory: "Bills" },
   
  ]);

  // Remove Expences
  const onDelete = (id:number) => {
    setExpences(expences.filter(item => item.id !== id))
  }
  // Fillter Expences
  const fillterExpences = (title:string) => {
    setSelect(title)
  }

  interface Values{
    title:string,
    price:number,
    catergory:string,
  }

  const addExpences = (data:Values) => {
    setExpences([...expences,{id:expences.length+1,...data}])
  }

  const queary = select ? expences.filter(item => item.catergory === select) : expences


  return (
    <>
      <header>
        <Navbar navHeading='Expense Tracker' />
      </header>
      <main className='container'>
        <Intro />
        <ExpenseForm addExpences={(data) => addExpences(data)}/>
        <hr />
        <Selection onChange={(name) => {fillterExpences(name)}}/>
        <ShowArea expences={queary} onSelect={(id)=>{onDelete(id)}}/>
      </main>
    </>
  );
}

export default App;

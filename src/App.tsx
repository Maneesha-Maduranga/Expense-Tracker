
import ExpenseForm from "./components/ExpenseForm";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Selection from "./components/Selection";
import ShowArea from "./components/ShowArea";

function App() {
  return (
    <>
      <header>
        <Navbar navHeading="Expense Tracker"/>
      </header>
      <main className="container">
        <Intro />
        <ExpenseForm />
        <hr />
        <Selection />
        <ShowArea />
      </main>
    </>
  );
}

export default App;

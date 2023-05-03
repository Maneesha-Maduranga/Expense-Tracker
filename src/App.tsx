
import ExpenseForm from "./components/ExpenseForm";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar navHeading="Expense Tracker"/>
      </header>
      <main className="container">
        <Intro />
        <ExpenseForm />
      </main>
    </>
  );
}

export default App;

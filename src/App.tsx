import Buttons from "./components/Buttons";
import CardList from "./components/CardList";
import Form from "./components/Form";
import FotoCard from "./components/FotoCard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Buttons />
      <CardList />
      <Form />
      <FotoCard />
    </>
  );
}

export default App;

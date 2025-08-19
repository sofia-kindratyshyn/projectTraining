import Buttons from "./components/Buttons";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Buttons />
      <h2 className="text-4xl text-center mb-6">Cards</h2>
      <ul className="flex flex-wrap gap-3 justify-center">
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </>
  );
}

export default App;

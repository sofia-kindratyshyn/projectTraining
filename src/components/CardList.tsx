import Card from "./Card";

export default function CardList() {
  return (
    <>
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

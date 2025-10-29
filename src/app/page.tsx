import CardSass from "@/component/CardSass";
import CardStyleComponent from "@/component/CardStyleComponent";

export default function Home() {
  return (
    <div className="cardWrap">
      <h2>Style Component</h2>
      <ul className="book_list" >
        <CardStyleComponent/>
      </ul>
      <h2>SASS</h2>
      <ul className="book_list sass" >
        <CardSass/>
      </ul>
    </div>
  );
}

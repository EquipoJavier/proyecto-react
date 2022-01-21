
import Card from "./Cards/Card";
import "./ThirdSection.scss";

export default function ThirdSection() {
  return (
    <section className="third__section" id="third__section">
      <h1 className="third__section--title">
        ¡LA DIVERSION REUNIDA EN UN SOLO LUGAR!
      </h1>
       <div>
       <Card name="card1" />
       <Card name="card2"/>
       <Card name="card3"/>
       <Card name="card4"/>
      </div>
    </section>
  );
}

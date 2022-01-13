import Bus from "./Bus/Bus";
import Roads from "./Roads/Roads";

export default function SectionAllTransports() {
  return (
    <section class="section__allTransports">
      <h1>¡Desplázate, ahorra, visita!</h1>
      <Bus />
      <Roads />
    </section>
  );
}
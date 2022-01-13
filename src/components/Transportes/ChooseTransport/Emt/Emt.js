export default function Emt() {
  return (
    <>
      <a href="#popup_emt">
        <div class="col-1-of-3 choose__transport_options--option">
          <img src="../Recursos/img/emt_xl.gif" alt="" />
          <h2>Líneas EMT</h2>
        </div>
      </a>
      <div id="popup_emt" class="popup--transporte">
        <div class="popup--transporte__body">
          <h2>Mapa a tiempo real de autobúses EMT</h2>
          <br />
          <br />
          <a class="popup--transporte__close" href="#choose__transport">
            &times;
          </a>
          <div class="popup--transporte__content">
            <iframe
              title="emt"
              src="https://navegapormadrid.emtmadrid.es/app/"
              width="600vw"
              height="350vh"
              style= {{ border:0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
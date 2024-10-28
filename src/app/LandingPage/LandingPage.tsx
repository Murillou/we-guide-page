import './LandingPage.css';

export function LandingPage() {
  return (
    <div>
      <section className="custom-background-landing-page d-flex flex-column justify-content-center">
        <div className="custom-box">
          <h5 className="custom-title-box">
            Conecte-se com a We Guide e viva novas experiências!
          </h5>

          <p className="custom-description-box">
            Com um guia de turismo, sua viagem se transforma em uma jornada de
            descoberta e experiências únicas.
          </p>

          <button className="custom-button-box custom-description-box">
            Conheça nossos guias
          </button>
        </div>

        <div className="d-flex justify-content-end">
          <div className="custom-locality text-center d-flex ">
            Rio de Janeiro - RJ
          </div>
        </div>
      </section>
    </div>
  );
}

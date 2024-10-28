import './LandingPage.css';
import Image from 'next/image';
import guideAna from '../assets/ana-luiza.png';

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

      <section>
        <div>
          <h1>
            Procurando um tour personalizado? Encontre o guia perfeito para sua
            próxima aventura!
          </h1>
        </div>
        <div>
          <input type="search" />
          <input type="submit" />
        </div>

        <div className="card">
          <Image
            src={guideAna}
            width={297}
            height={270}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Ana Luiza</h5>
            <h6 className="card-text"> João Pessoa - PB</h6>
            <a href="#" className="btn btn-primary">
              Visualizar perfil
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

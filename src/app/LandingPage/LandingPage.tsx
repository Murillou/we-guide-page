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

      <section className="d-flex flex-column align-items-center  custom-container-carousel p-1 pt-5 ">
        <div>
          <h1 className="custom-title-container-carousel font-weight-bold text-center">
            <span className="d-block">Procurando um tour personalizado?</span>
            <span className="d-block">
              Encontre o guia perfeito para sua próxima aventura!
            </span>
          </h1>
        </div>

        <div className="d-flex flex-row w-100 justify-content-center gap-2">
          <input
            type="search"
            placeholder="Pesquisar"
            className="custom-input-search-container-carousel"
          />
          <input
            type="submit"
            value="Pesquisar"
            className="custom-button-search-container-carousel border border-1 rounded p-1 px-3"
          />
        </div>

        <div className="card">
          <Image src={guideAna} width={297} height={270} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ana Luiza</h5>
            <h6 className="card-text"> João Pessoa - PB</h6>
            <p>Condutor certificado</p>
            <div>
              <span>Português, Alemão</span>
            </div>
            <a href="#" className="btn btn-primary">
              Visualizar perfil
            </a>
          </div>

          <Image src={guideAna} width={297} height={270} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ana Luiza</h5>
            <h6 className="card-text"> João Pessoa - PB</h6>
            <p>Condutor certificado</p>
            <div>
              <span>Português, Alemão</span>
            </div>
            <a href="#" className="btn btn-primary">
              Visualizar perfil
            </a>
          </div>

          <Image src={guideAna} width={297} height={270} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ana Luiza</h5>
            <h6 className="card-text"> João Pessoa - PB</h6>
            <p>Condutor certificado</p>
            <div>
              <span>Português, Alemão</span>
            </div>
            <a href="#" className="btn btn-primary">
              Visualizar perfil
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

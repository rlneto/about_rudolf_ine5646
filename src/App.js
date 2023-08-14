import "./styles.css";

import Aside from "./components/Aside";
import Cartao from "./components/Cartao";
import Main from "./components/Main";
import Imagem from "./components/Imagem";
import Paragrafo from "./components/Paragrafo";
import Secao from "./components/Secao";
import Endereco from "./components/Endereco";

export default function App() {
  class Texto {
    constructor(texto, tag, estilo = null) {
      this.texto = texto;
      this.tag = tag;
      this.estilo = estilo;
    }
  }

  class Foto {
    constructor(imagem, descricao = null) {
      this.foto = imagem;
      this.descricao = descricao;
    }
  }

  class Pagina {
    constructor(endereco, texto) {
      this.endereco = endereco;
      this.texto = texto;
    }
  }

  const textos_aside = [];
  const disciplinas = [
    "EGC5009 - Geração de Ideias e Criatividade em Informática",
    "EPS5211 - Programação Econômica e Financeira",
    "INE5609 - Estruturas de Dados",
    "INE5646 - Programação para Web",
    "INE5649 - Técnicas Estatísticas de Predição"
  ];
  const enderecos = [];
  const imagens = [];
  const smallFont = {
    fontSize: "10px"
  };

  textos_aside.push(
    new Texto("Graduando em Sistemas de informação", "p", smallFont)
  );
  textos_aside.push(
    new Texto("Universidade Federal de Santa Catarina", "p", smallFont)
  );
  textos_aside.push(new Texto(`Interesses:`, "p"));
  textos_aside.push(
    new Texto(
      "Desenvolvimento Web, Desenvolvimento Mobile, Ciência de Dados, Aprendizado de Máquina",
      "p",
      smallFont
    )
  );

  return (
    <div className="App">
      <Aside>
        <Paragrafo texto="Rudolfo" tag="h3" />
        <Imagem foto="../autor.png" descricao="rudolf" />
        {textos_aside.map((elemento, indice) => {
          return (
            <Paragrafo
              key={indice}
              texto={elemento.texto}
              tag={elemento.tag}
              estilo={elemento.estilo}
            />
          );
        })}
        <Endereco endereco="https://github.com/rlneto" texto="LinkedIn" />
        <p>
          <Endereco
            endereco="http://www.rudolfo.pro.br"
            texto="rudolfo.pro.br"
          />
        </p>
      </Aside>

      <Main>
        <Cartao>
          <section>
            <Paragrafo texto="Disciplinas cursadas:" tag="h3" />
            {disciplinas.map((elemento) => {
              return <Paragrafo texto={elemento} tag="p" />;
            })}
          </section>
        </Cartao>
        <Cartao>
          <section>
            <Paragrafo texto="Portfolio: " />
            <Endereco
              endereco="http://www.planejagrad.com.br"
              texto="PlanejaGrad"
            />
            <p>
              <Endereco
                endereco="http://calculajuros.netlify.app"
                texto="Calculadora de Juros"
              />
            </p>
          </section>
        </Cartao>
      </Main>
      <footer>
        <Paragrafo texto="Página desenvolvida por Rudolfo Lange Neto" />
        <p>
          <a href="http://www.linkedin.com/in/rudolfoneto">
            <img alt="Icon" class="links" src="../linkedin.png" />
          </a>
          <a href="https://github.com/rlneto/calcula_juros_investimento">
            <img alt="Icon" class="links" src="../github_ico.png" />
          </a>
        </p>
      </footer>
    </div>
  );
}

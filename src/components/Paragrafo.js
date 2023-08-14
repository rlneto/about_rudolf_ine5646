import "./Paragrafo.css";

export default function Paragrafo(props) {
  switch (props.tag) {
    case "h1": {
      return <h1 style={props.estilo}>{props.texto}</h1>;
    }
    case "h2": {
      return <h2 style={props.estilo}>{props.texto}</h2>;
    }
    case "h3": {
      return <h3 style={props.estilo}>{props.texto}</h3>;
    }
    default: {
      return <p style={props.estilo}>{props.texto}</p>;
    }
  }
}

import "./Endereco.css";

export default function Endereco(props) {
  return <a href={props.endereco}>{props.texto}</a>;
}

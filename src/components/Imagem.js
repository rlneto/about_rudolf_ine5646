import "./Imagem.css";

export default function Imagem(props) {
  return <img className="imagem" src={props.foto} alt={props.descricao} />;
}

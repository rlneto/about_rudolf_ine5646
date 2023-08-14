import "./Secao.css";

export default function Secao(props) {
  return (
    <div>
      <main className="secao" style={props.estilo}>
        {props.children}
      </main>
    </div>
  );
}

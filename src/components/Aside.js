import "./Aside.css";

export default function Aside(props) {
  return (
    <div>
      <aside className="barra-lateral">{props.children}</aside>
    </div>
  );
}

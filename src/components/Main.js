import "./Main.css";

export default function Main(props) {
  return (
    <div>
      <main className="main">{props.children}</main>
    </div>
  );
}

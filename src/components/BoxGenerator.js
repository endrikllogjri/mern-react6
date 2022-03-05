import "./BoxGenerator.css";
function BoxGenerator(props) {
  return (
    <div className="row">
      {props.colors.map((color) => (
        <div>
          <p className="box" style={{ backgroundColor: color }}></p>
        </div>
      ))}
    </div>
  );
}

export default BoxGenerator;

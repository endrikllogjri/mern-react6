import { useState } from "react";

function Form(props) {
  const [color, setColor] = useState("");

  const onColorChange = (event) => {
     setColor(event.target.value);
  }

  const createNewColor = (event) => {
    event.preventDefault();
    props.onAddColors([...props.colors, color]);
  }

  return (
    <div>
      <form onSubmit={createNewColor}>
        <div className="col">
          <h3>Color</h3>
          <input className="input" type="text" onChange={onColorChange}/>
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

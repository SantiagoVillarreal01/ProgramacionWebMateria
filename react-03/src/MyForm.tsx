import { useState } from "react";

function MyForm() {

  //const handleClick = () => {
   // alert("click")
  //}

  const [name, setName] = useState("");

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    alert(`Texto ingresado: ${name}`);
    e.preventDefault();
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                Nombre: <input type="text" value={name} onChange = {handleChange} />
            </div>
            <input type="submit" value="Enviar1"/>
            <input type="submit" value="Enviar2"/>
            <input type="submit" value="Button" onClick={()=>alert(`${name}`)}/>
            <br/>
            <div>{name}</div>
        </form>
    </>
  );
}

export default MyForm;



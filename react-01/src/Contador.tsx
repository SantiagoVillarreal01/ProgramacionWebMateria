import { useEffect } from "react";
import HolaMundo2 from "./HolaMundo2";

function Contador(){

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("Componente montado");

        //return () => {
        //    console.log("Componente desmontado");
        //}
        }
    )

    useEffect(() => {
        console.log(`Contador cambiado: ${contador}`);
    }, [contador])

    
    const handleUp = () => {
        setContador(contador + 1);

    }

    const handleDown = () => { 
        setContador(contador - 1);
    }



    return (
        <>
            <div>Valor: {contador}</div>
            <br/>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>
            <br/>
            <HolaMundo2 name="Contador" age={contador}/>
        </>
    )   
}

export default Contador

function useState(arg0: number): [any, any] {
    throw new Error("Function not implemented.");
}

function HolaMundo(props: {name: string}) {
    const handleClick = () => {
        //alert("Click componente");
        alert(`click componente ${props.name}!`);
    }
    return (
        <>
            <h4>Hola mundo {props.name}!</h4>
            <b>Ejemplo de componentes REACT!</b>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default HolaMundo
function Producto({nombre,precio,imagen}) {
    return (
        <div className="card">
            <img src={imagen} alt={nombre}/>
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <button>Comprar</button>
        </div>
    )
}

export default Producto;
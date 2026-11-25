import { Link } from "react-router-dom"
export default function BlogTaladro() {
    return(
        
        <main className="container my-5">

            <article className="card p-4">

                <img
                    src="https://www.yolito.cl/Content/Productos/taladro-inalambrico-10007580.jpg"
                    className="img-fluid rounded mb-4"
                    height="200" width="200"
                    alt=""/>

                <h1 className="text-dark">
                    Cómo elegir un taladro
                </h1>

                <p className="text-dark">
                    El taladro es una de las herramientas más utilizadas en trabajos
                    de construcción, reparación y mejoramiento del hogar.
                </p>

                <p className="text-dark">
                    Antes de elegir uno es importante considerar el tipo de trabajo
                    que se realizará. Para tareas simples puede ser suficiente un
                    taladro de uso doméstico, mientras que para trabajos más exigentes
                    puede ser necesario utilizar una herramienta de mayor potencia.
                </p>

                <p className="text-dark">
                    También es importante considerar características como el tamaño,
                    el tipo de alimentación, la velocidad y la posibilidad de utilizar
                    diferentes brocas y accesorios.
                </p>

                <Link to="/Blogs">
                    Volver a Blogs
                </Link>


            </article>
            
        </main>
        
    )
}
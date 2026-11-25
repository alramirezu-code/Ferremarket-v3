
export default function AgregarProducto() {
    return(
        <main>
            <h1>Agregar Producto</h1>

            <section>
                <form id="formProducto">

                    <div class="campo">
                        <label for="codigo">Código Producto</label>

                        <input
                            type="text"
                            id="codigo"
                            name="codigo"
                            placeholder="Ej: PRO001"/>

                        <span id="errorCodigo" class="error"></span>
                    </div>


                    <div class="campo">
                        <label for="nombre">Nombre</label>

                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ingrese nombre"/>

                        <span id="errorNombre" class="error"></span>
                    </div>


                    <div class="campo">
                        <label for="descripcion">Descripción</label>

                        <textarea
                            id="descripcion"
                            name="descripcion"
                            placeholder="Ingrese descripción del producto">
                        </textarea>

                        <span id="errorDescripcion" class="error"></span>
                    </div>


                    <div class="campo">
                        <label for="precio">Precio</label>

                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            placeholder="Ingrese precio"
                            min="0"/>

                        <span id="errorPrecio" class="error"></span>
                    </div>


                    <div class="campo">
                        <label for="stock">Stock</label>

                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            placeholder="Ingrese stock"
                            min="0"/>

                        <span id="errorStock" class="error"></span>
                    </div>


                    <div class="campo">
                        <label for="stockCritico">Stock Crítico</label>

                        <input
                            type="number"
                            id="stockCritico"
                            name="stockCritico"
                            placeholder="Ingrese stock crítico"
                            min="0"/>

                        <span id="errorStockCritico" class="error"></span>
                    </div>


                    <div class="campo">

                        <label for="categoria">Categoría</label>

                        <select id="categoria" name="categoria">

                            <option value="">
                                Seleccione una categoría
                            </option>

                            <option value="materiales">
                                Materiales
                            </option>

                            <option value="herramientas">
                                Herramientas
                            </option>

                            <option value="adhesivo">
                                Adhesivos
                            </option>

                        </select>

                        <span id="errorCategoria" class="error"></span>

                    </div>


                    <div class="campo">

                        <label for="imagen">Imagen</label>

                        <input
                            type="text"
                            id="imagen"
                            name="imagen"
                            placeholder="Ej: img/producto_default.webp"/>

                        <span id="errorImagen" class="error"></span>

                    </div>

                    <button
                        type="submit"
                        class="agregarProducto">

                        Agregar Producto

                    </button>

                </form>

                <div id="mensaje" class="exito"></div>

            </section>
        </main>
    )
}
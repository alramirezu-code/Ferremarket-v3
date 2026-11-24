

export default function Contacto() {
  return (
    <>

      <main className="container my-5" style={{ maxWidth: '700px' }}>
        <h1 className="text-center mb-4">Contacto</h1>

        <section className="bg-white text-dark p-4 rounded shadow-sm">
          <form id="form-contacto" noValidate>
            <div className="mb-3">
              <label htmlFor="contactoNombre" className="form-label">
                Nombre *
              </label>
              <input
                type="text"
                className="form-control"
                id="contactoNombre"
                maxLength={100}
                required
              />
              <div className="invalid-feedback">
                El nombre es obligatorio y debe tener máximo 100 caracteres.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="contactoCorreo" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="contactoCorreo"
                maxLength={100}
              />
              <div className="invalid-feedback">
                Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="contactoComentario" className="form-label">
                Comentario *
              </label>
              <textarea
                className="form-control"
                id="contactoComentario"
                rows={5}
                maxLength={500}
                required
              ></textarea>
              <div className="invalid-feedback">
                El comentario es obligatorio y debe tener máximo 500 caracteres.
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
const formularioLogin = document.getElementById("formulario-login");

formularioLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    if (correo === "madreemprendedora@gmail.com" && contrasena === "123456") {

        window.location.href = "mi-emprendimiento.html";

    } else {

        alert("❌ El correo o la contraseña son incorrectos.");

    }

});
function respuestaCorrecta() {
    document.getElementById("resultado").innerHTML =
        "¡Correcto! 🎉 Un emprendimiento busca ofrecer una solución o generar valor a partir de una idea.";
}

function respuestaIncorrecta() {
    document.getElementById("resultado").innerHTML =
        "❌ Esa no es la respuesta. Inténtalo nuevamente.";
}
function crearIdea() {

    let habilidad = document.getElementById("habilidad").value;
    let producto = document.getElementById("producto").value;
    let necesidad = document.getElementById("necesidad").value;

    document.getElementById("miIdea").innerHTML =
        "<h3>🌟 Mi idea de emprendimiento</h3>" +
        "<p><strong>Lo que sé hacer:</strong> " + habilidad + "</p>" +
        "<p><strong>Mi producto o servicio:</strong> " + producto + "</p>" +
        "<p><strong>Necesidad que soluciono:</strong> " + necesidad + "</p>";
}
function crearCliente() {

    let edad = document.getElementById("edad").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let necesidad = document.getElementById("necesidadCliente").value;
    let interes = document.getElementById("interes").value;

    document.getElementById("perfilCliente").innerHTML =
        "<h3>👤 Mi cliente ideal</h3>" +
        "<p><strong>Edad:</strong> " + edad + "</p>" +
        "<p><strong>Ubicación:</strong> " + ubicacion + "</p>" +
        "<p><strong>Necesidad:</strong> " + necesidad + "</p>" +
        "<p><strong>Interés:</strong> " + interes + "</p>";
}
function crearPropuesta() {

    let producto = document.getElementById("productoValor").value;
    let problema = document.getElementById("problemaValor").value;
    let diferencia = document.getElementById("diferenciaValor").value;

    document.getElementById("propuestaValor").innerHTML =
        "<h3>🌟 Mi propuesta de valor</h3>" +
        "<p>Ofrezco <strong>" + producto + "</strong> " +
        "para solucionar <strong>" + problema + "</strong>. " +
        "Mi emprendimiento se diferencia porque " +
        "<strong>" + diferencia + "</strong>.</p>";
}
function crearCamposCostos() {

    let cantidad = Number(
        document.getElementById("cantidadCostos").value
    );

    let campos = document.getElementById("camposCostos");

    campos.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {

        campos.innerHTML +=
            "<p><strong>Material " + i + "</strong></p>" +

            "<label>Nombre:</label><br>" +
            "<input type='text' id='nombre" + i +
            "' placeholder='Ejemplo: Harina'>" +

            "<br>" +

            "<label>Precio:</label><br>" +
            "<input type='number' id='precio" + i +
            "' placeholder='Ejemplo: 8000'>" +

            "<br><br>";
    }
}
function calcularCostoTotal() {

    let cantidad = Number(
        document.getElementById("cantidadCostos").value
    );

    let total = 0;

    for (let i = 1; i <= cantidad; i++) {

        let precio = Number(
            document.getElementById("precio" + i).value
        );

        total = total + precio;
    }

    document.getElementById("resultadoCostos").innerHTML =
        "<h3>💰 Resultado</h3>" +
        "<p>El costo total es: <strong>$" +
        total.toLocaleString() +
        "</strong></p>";
}
function calcularPrecioVenta() {

    let costo = Number(
        document.getElementById("costoProducto").value
    );

    let ganancia = Number(
        document.getElementById("gananciaDeseada").value
    );

    let precioVenta = costo + ganancia;

    document.getElementById("resultadoPrecio").innerHTML =
        "<h3>💵 Resultado</h3>" +
        "<p>Tu precio de venta podría ser: " +
        "<strong>$" + precioVenta.toLocaleString() +
        "</strong></p>";
}
function calcularGanancia() {

    let ingresos = Number(
        document.getElementById("ingresos").value
    );

    let costos = Number(
        document.getElementById("costosGanancia").value
    );

    let ganancia = ingresos - costos;

    document.getElementById("resultadoGanancia").innerHTML =
        "<h3>📈 Resultado</h3>" +
        "<p>Tu ganancia es de: " +
        "<strong>$" + ganancia.toLocaleString() +
        "</strong></p>";
}
function registrarMovimiento() {

    let descripcion =
        document.getElementById("descripcionMovimiento").value;

    let tipo =
        document.getElementById("tipoMovimiento").value;

    let valor =
        Number(document.getElementById("valorMovimiento").value);

    document.getElementById("resultadoMovimiento").innerHTML =
        "<h3>📊 Movimiento registrado</h3>" +
        "<p><strong>Descripción:</strong> " +
        descripcion + "</p>" +
        "<p><strong>Tipo:</strong> " +
        tipo + "</p>" +
        "<p><strong>Valor:</strong> $" +
        valor.toLocaleString() + "</p>";
}
function seleccionarRedes() {

    let redes =
        document.querySelectorAll(
            'input[name="redSocial"]:checked'
        );

    let seleccionadas = "";

    for (let i = 0; i < redes.length; i++) {

        seleccionadas =
            seleccionadas +
            "<li>" + redes[i].value + "</li>";
    }

    if (seleccionadas == "") {

        document.getElementById("resultadoRedes").innerHTML =
            "<p>⚠️ Selecciona al menos una red social.</p>";

    } else {

        document.getElementById("resultadoRedes").innerHTML =
            "<h3>📱 Redes seleccionadas</h3>" +
            "<ul>" + seleccionadas + "</ul>";
    }
}
function crearPublicacion() {

    let producto =
        document.getElementById("nombreProducto").value;

    let caracteristica =
        document.getElementById("caracteristicaProducto").value;

    let contacto =
        document.getElementById("contacto").value;

    document.getElementById("resultadoPublicacion").innerHTML =

        "<h3>📱 Así podría quedar tu publicación</h3>" +

        "<div class='curso'>" +

        "<h3>✨ " + producto + "</h3>" +

        "<p>🎉 ¡Conoce nuestro " + producto + "!</p>" +

        "<p>⭐ " + caracteristica + "</p>" +

        "<p>📲 Contáctanos: " + contacto + "</p>" +

        "</div>";
}
function crearMarca() {

    let nombre =
        document.getElementById("nombreMarca").value;

    let eslogan =
        document.getElementById("esloganMarca").value;

    let personalidad =
        document.getElementById("personalidadMarca").value;

    document.getElementById("resultadoMarca").innerHTML =

        "<h3>✨ Así es tu marca</h3>" +

        "<div class='curso'>" +

        "<h2>🏷️ " + nombre + "</h2>" +

        "<p><strong>Eslogan:</strong> " +
        eslogan + "</p>" +

        "<p><strong>Personalidad:</strong> " +
        personalidad + "</p>" +

        "</div>";
}
function crearPublicidad() {
    let producto =
        document.getElementById("productoPublicidad").value;

    let objetivo =
        document.getElementById("objetivoPublicidad").value;

    let publico =
        document.getElementById("publicoPublicidad").value;

    let presupuesto =
        Number(
            document.getElementById("presupuestoPublicidad").value
        );

    document.getElementById("resultadoPublicidad").innerHTML =
        "<h3>📢 Mi campaña publicitaria</h3>" +
        "<p><strong>Producto o servicio:</strong> " +
        producto + "</p>" +
        "<p><strong>Objetivo:</strong> " +
        objetivo + "</p>" +
        "<p><strong>Público:</strong> " +
        publico + "</p>" +
        "<p><strong>Presupuesto diario:</strong> $" +
        presupuesto.toLocaleString() + "</p>";
}
function crearPerfilClienteVenta() {

    let producto =
        document.getElementById("productoClienteVenta").value;

    let edad =
        document.getElementById("edadClienteVenta").value;

    let necesidad =
        document.getElementById("necesidadClienteVenta").value;

    let interes =
        document.getElementById("interesClienteVenta").value;

    document.getElementById("resultadoClienteVenta").innerHTML =
        "<h3>👤 Mi cliente</h3>" +
        "<p><strong>Producto o servicio:</strong> " +
        producto + "</p>" +
        "<p><strong>Edad:</strong> " +
        edad + "</p>" +
        "<p><strong>Necesidad:</strong> " +
        necesidad + "</p>" +
        "<p><strong>Interés:</strong> " +
        interes + "</p>";
}
function crearMensajeVenta() {

    let producto =
        document.getElementById("productoVenta").value;

    let beneficio =
        document.getElementById("beneficioVenta").value;

    let mensaje =
        document.getElementById("mensajeVenta").value;

    document.getElementById("resultadoVenta").innerHTML =
        "<h3>💬 Mi mensaje de venta</h3>" +
        "<p><strong>Producto:</strong> " +
        producto + "</p>" +
        "<p><strong>Beneficio:</strong> " +
        beneficio + "</p>" +
        "<p><strong>Mensaje para mi cliente:</strong></p>" +
        "<div class='curso'>" +
        "<p>" + mensaje + "</p>" +
        "</div>";
}

function evaluarAtencionCliente() {

    let respuesta = document.querySelector(
        'input[name="situacionCliente"]:checked'
    );

    let resultado = document.getElementById("resultadoAtencion");

    if (respuesta === null) {
        resultado.innerHTML =
            "<p>⚠️ Selecciona una respuesta antes de continuar.</p>";
    } else if (respuesta.value === "b") {
        resultado.innerHTML =
            "<p>🎉 ¡Correcto! Informar con amabilidad y resolver dudas " +
            "ayuda a generar confianza en el cliente.</p>";
    } else {
        resultado.innerHTML =
            "<p>❌ Inténtalo nuevamente. Recuerda que debemos " +
            "tratar al cliente con respeto y responder sus preguntas.</p>";
    }
}

function crearRespuestaCliente() {

    let respuesta =
        document.getElementById("respuestaCliente").value.trim();

    if (respuesta === "") {
        document.getElementById("respuestaCreada").innerHTML =
            "<p>⚠️ Escribe una respuesta para tu cliente.</p>";
    } else {
        document.getElementById("respuestaCreada").innerHTML =
            "<h3>💌 Mi respuesta para el cliente</h3>" +
            "<div class='curso'><p></p></div>";

        document.querySelector(
            "#respuestaCreada .curso p"
        ).textContent = respuesta;
    }
}
function evaluarFidelizacion() {

    let respuesta = document.querySelector(
        'input[name="fidelizacion"]:checked'
    );

    let resultado = document.getElementById(
        "resultadoFidelizacion"
    );

    if (respuesta === null) {

        resultado.innerHTML =
            "<p>⚠️ Selecciona una respuesta.</p>";

    } else if (respuesta.value === "b") {

        resultado.innerHTML =
            "<p>🎉 ¡Correcto! Agradecer la compra y ofrecer " +
            "una buena atención ayuda a crear relaciones " +
            "duraderas con los clientes.</p>";

    } else {

        resultado.innerHTML =
            "<p>❌ Inténtalo nuevamente. Recuerda que " +
            "fidelizar significa generar confianza y satisfacción, " +
            "sin presionar al cliente.</p>";

    }
}


function crearEstrategiaFidelizacion() {

    let producto = document.getElementById(
        "productoFidelizacion"
    ).value.trim();

    let beneficio = document.getElementById(
        "beneficioFidelizacion"
    ).value;

    let agradecimiento = document.getElementById(
        "agradecimientoFidelizacion"
    ).value.trim();

    let resultado = document.getElementById(
        "resultadoEstrategiaFidelizacion"
    );

    if (producto === "" || agradecimiento === "") {

        resultado.innerHTML =
            "<p>⚠️ Completa el producto y el mensaje " +
            "de agradecimiento.</p>";

        return;
    }

    resultado.innerHTML =
        "<h3>🌟 Mi estrategia de fidelización</h3>" +
        "<div class='curso'>" +
        "<p><strong>Mi producto:</strong> " +
        producto + "</p>" +
        "<p><strong>Beneficio para clientes frecuentes:</strong> " +
        beneficio + "</p>" +
        "<p><strong>Mi agradecimiento:</strong></p>" +
        "<p id='mensajeAgradecimiento'></p>" +
        "</div>";

    document.getElementById(
        "mensajeAgradecimiento"
    ).textContent = agradecimiento;
}

function validarIdea() {
    const producto = document.getElementById("productoValidacion").value.trim();
    const cliente = document.getElementById("clienteValidacion").value.trim();
    const necesidad = document.getElementById("necesidadValidacion").value.trim();
    const prueba = document.getElementById("pruebaValidacion").value.trim();
    const mejora = document.getElementById("mejoraValidacion").value;

    const resultado = document.getElementById("resultadoValidacion");

    if (!producto || !cliente || !necesidad || !prueba || !mejora) {
        resultado.innerHTML = "<p>Completa todos los campos para crear tu plan.</p>";
        return;
    }

    resultado.innerHTML = `
        <h3>Mi plan para validar mi idea</h3>

        <p><strong>Mi producto o servicio:</strong> ${escaparTextoValidacion(producto)}</p>

        <p><strong>Mis posibles clientes:</strong> ${escaparTextoValidacion(cliente)}</p>

        <p><strong>La necesidad que quiero atender:</strong> ${escaparTextoValidacion(necesidad)}</p>

        <p><strong>Cómo voy a comprobar mi idea:</strong> ${escaparTextoValidacion(prueba)}</p>

        <p><strong>Aspecto que voy a evaluar:</strong> ${escaparTextoValidacion(mejora)}</p>

        <h3>Mi siguiente paso</h3>

        <p>
            Voy a conversar con posibles clientes, escuchar sus opiniones y realizar
            una prueba pequeña antes de invertir una cantidad importante de dinero.
        </p>

        <p>
            <strong>¡Muy bien!</strong> Ya tienes un primer plan para investigar
            tu idea de negocio.
        </p>
    `;
}

function escaparTextoValidacion(texto) {
    return texto.replace(/[&<>"']/g, function(caracter) {
        const caracteres = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return caracteres[caracter];
    });
}

function crearModeloNegocio() {
    const nombre = document.getElementById("nombreModelo").value.trim();
    const cliente = document.getElementById("clienteModelo").value.trim();
    const propuesta = document.getElementById("propuestaModelo").value.trim();
    const recursos = document.getElementById("recursosModelo").value.trim();
    const canal = document.getElementById("canalModelo").value;
    const ingresos = document.getElementById("ingresosModelo").value.trim();
    const costos = document.getElementById("costosModelo").value.trim();

    const resultado = document.getElementById("resultadoModelo");

    if (!nombre || !cliente || !propuesta || !recursos ||
        !canal || !ingresos || !costos) {
        resultado.textContent =
            "Completa todos los campos para generar tu modelo de negocio.";
        return;
    }

    resultado.innerHTML = `
        <h3>📋 Mi modelo de negocio</h3>

        <p><strong>Nombre del emprendimiento:</strong>
        ${escaparTextoModelo(nombre)}</p>

        <p><strong>Mis clientes:</strong>
        ${escaparTextoModelo(cliente)}</p>

        <p><strong>Mi propuesta de valor:</strong>
        ${escaparTextoModelo(propuesta)}</p>

        <p><strong>Mis recursos:</strong>
        ${escaparTextoModelo(recursos)}</p>

        <p><strong>Mis canales de venta:</strong>
        ${escaparTextoModelo(canal)}</p>

        <p><strong>Mis fuentes de ingresos:</strong>
        ${escaparTextoModelo(ingresos)}</p>

        <p><strong>Mis principales costos:</strong>
        ${escaparTextoModelo(costos)}</p>

        <h3>🌱 Mi siguiente paso</h3>

        <p>
            Revisaré los recursos, los costos y las necesidades
            de mis clientes para organizar mejor mi emprendimiento
            y preparar mis próximos pasos.
        </p>
    `;
}

function escaparTextoModelo(texto) {
    const caracteres = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    };

    return texto.replace(/[&<>"']/g, caracter => caracteres[caracter]);
}


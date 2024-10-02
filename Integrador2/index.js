function showPage(pageId) {
    const pages = document.querySelectorAll('.page')
    pages.forEach((page) => page.classList.remove('active'))
    document.getElementById(pageId).classList.add('active')
}

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault()
    const tipoPropiedad = document.getElementById('tipoPropiedad').value
    const tipoBarrio = document.getElementById('Barrio').value
    const metrosCuadrados = document.getElementById('metrosCuadradosInput').value

    const cotizacion = cotizar(metrosCuadrados, tipoBarrio, tipoPropiedad)
    console.log(`Su cotización de ${metrosCuadrados}mt2, para el barrio ${tipoBarrio} y tipo de propiedad ${tipoPropiedad} es ${cotizacion}`)

    const valorPantalla = document.getElementById('PrecioEstimado')
    valorPantalla.innerHTML = cotizacion
})

const barrios = [
    { barrio: 'CABA', metroCuadrado: 20 },
    { barrio: 'AMBA', metroCuadrado: 14 },
]

const tipoPropiedades = [
    { tipo: 'casa', metroCuadrado: 18 },
    { tipo: 'departamento', metroCuadrado: 15 },
    { tipo: 'ph', metroCuadrado: 12 },
]

const VALOR_METRO_CUADRADO_BARRIO_DEFAULT = 10
const VALOR_METRO_CUADRADO_TIPO_PROPIEDAD_DEFAULT = 10

function cotizar(metrosCuadrados, barrio, tipoPropiedad) {
    const barrioEncontrado = barrios.find((b) => b.barrio === barrio)
    const tipoPropiedadEncontrada = tipoPropiedades.find((t) => t.tipo === tipoPropiedad)

    const valorMetroCuadradoBarrio = barrioEncontrado?.metroCuadrado || VALOR_METRO_CUADRADO_BARRIO_DEFAULT
    const valorMetroCuadradoTipoPropiedad = tipoPropiedadEncontrada?.metroCuadrado || VALOR_METRO_CUADRADO_TIPO_PROPIEDAD_DEFAULT

    const cotizacion = metrosCuadrados * (valorMetroCuadradoBarrio + valorMetroCuadradoTipoPropiedad)

    return cotizacion
}

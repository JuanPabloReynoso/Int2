import { fetchDataPromise } from './modules/asincronismo.js'
import { createCard } from './modules/createCard.js'

const API = 'https://rickandmortyapi.com/api/character'

const usingAsyncAwaitWithHTTPRequest = async function () {
    try {
        const informacionAPI = await fetchDataPromise(API) //Esto me devuelve el JSON directamente.
        const arrayPromises = []
        let cantPaginas = informacionAPI.info.pages

        console.log(`Cantidad de páginas: ${cantPaginas}`)

        for (let i = 1; i <= cantPaginas; i++) {
            let currentPage = `${API}?page=${i}`
            arrayPromises.push(fetchDataPromise(currentPage))
        }

        let paginas = await Promise.all(arrayPromises)

        paginas.forEach((pagina) => pagina.results.forEach((personaje) => createCard(personaje)))
    } catch (error) {
        console.error(error)
    }
}

usingAsyncAwaitWithHTTPRequest()

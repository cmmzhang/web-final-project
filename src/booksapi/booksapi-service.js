import axios from "axios";

export const findBookBySearchTerm = async (term) => {
    const response = await axios.get('https://api.nytimes.com/svc/books/v3/reviews.json?title='+ term +'&api-key=AMG29ubbk8l5MiCbhMtSkODIbIzCtDhG')
    return response.data.results
}
import axios from "axios";


const instanse = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const cocktailAPI = {
    getCocktails() {
        return instanse.get('filter.php?c=Cocktail').then(res => res.data)
    },
    getCocktailsByName(name) {
        return instanse.get(`search.php?s=${name}`).then(res => res.data)
    },
    getByFilter(option) {
        return instanse.get(`filter.php?a=${option}`).then(res => res.data)
    },
    getById(id) {
        return instanse.get(`lookup.php?i=${id}`).then(res => res.data)
    },
    getIngredient(name) {
        return instanse.get(`search.php?i=${name}`)
    },
}
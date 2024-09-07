import { type } from "@testing-library/user-event/dist/type"
import {cocktailAPI} from '../../API'

const initialState = {
    isLoading: false,
    cocktails: [],
}
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const  SET_ALL_COCKTAILS = 'SET_ALL_COCKTAILS'

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
            case SET_ALL_COCKTAILS:
                return {
                    ...state,
                    cocktails: action.payload
                }
        default: 
        return state
    }
}
 const toggleIsLoadingAC = (isLoading) => ( {type: TOGGLE_IS_LOADING, payload: isLoading} )
 const setAllCocktailsAC = (cocktails) => ({type: SET_ALL_COCKTAILS, payload: cocktails})


 export const getAllCocktails = () => (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    cocktailAPI.getCocktails()
    .then(data => dispatch(setAllCocktailsAC(data.drinks)))
    .catch(err => console.error(err))
    .finally(() => dispatch(toggleIsLoadingAC(false))) //Loadin 
 }

 export const getCocktailsByName = (name) => (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    cocktailAPI.getCocktailsByName(name)
    .then(data => dispatch(setAllCocktailsAC(data.drinks)))
    .catch(err => console.error(err))
    .finally(() => dispatch(toggleIsLoadingAC(false)))
}

export const getCocktailsByFilter = (option) => (dispatch) => {
    dispatch(toggleIsLoadingAC(true))
    cocktailAPI.getByFilter(option)
    .then(data => dispatch(setAllCocktailsAC(data.drinks)))
    .catch(err => console.error(err))
    .finally(() => dispatch(toggleIsLoadingAC(false)))
}

export default cocktailsReducer
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getAllCocktails, getCocktailsByFilter, getCocktailsByName } from '../../Redux/reducers/cocktailReducers'


const Header = () => {
    const [ name, setName] = useState('')
    const dispatch = useDispatch()

    const searchByName = (e) => {
        e.preventDefault()
        dispatch( getCocktailsByName(name))
        setName('')
    }

    const toggleFilter = (e) => {
        e.target.value === 'ALL'
        ? dispatch(getAllCocktails())
        : dispatch(getCocktailsByFilter(e.target.value))
    }
    return (
        <header>
            <form onSubmit={searchByName}>
                <input value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" placeholder='Cocktail name' />
                <button>Search</button>
            </form>
            <select onChange={toggleFilter}>
                <option value="ALL">All</option>
                <option value="Alcoholic">Alcoholic</option>
                <option value="Non_Alcoholic">No Alcoholic</option>
            </select>
        </header>
    );
};


export default Header;
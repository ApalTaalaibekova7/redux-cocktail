import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCocktailsById } from '../../Redux/reducers/cocktailReducers';
import Loader from '../../components/Loader/Loader';

const Cocktail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const {isLoading, cocktail} = useSelector(state => state.cocktails)
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    console.log(cocktail);
    

    useEffect(() => {
        if (id) {
            dispatch(getCocktailsById(id))
        }
        
    }, [id, dispatch]);

    if(isLoading) {
        return <Loader />
    }

    if (!cocktail) {
        return <p>No cocktail details available.</p>;
    }

    const ingredients = Array.from({ length: 15 }, (_, i) => cocktail[`strIngredient${i + 1}`])
    .filter(Boolean); // Фильтрация пустых или null значений ingredient


    const handleIngredientClick = (ingredient) => {
        setSelectedIngredient(ingredient);
        console.log(ingredient); 
    };


    return (

        <div>
            <h2>Details</h2>
            {cocktail.strDrinkThumb && (
             <img width={200} src={cocktail.strDrinkThumb} alt={cocktail.strDrinkThumb} />
            )}

            <h1>{cocktail.strDrink}</h1>

            <h3>Category: {cocktail.strCategory}</h3>

            <h2> Статус коктейля: {cocktail.strAlcoholic}</h2>
            <p>Instructions: {cocktail.strInstructions}</p>

            <h3>Glass:<p>{cocktail.strGlass}</p></h3>


            <h3>Ingredients:</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                         <li 
                         key={index} 
                         onClick={() => handleIngredientClick(ingredient)} 
                         style={{ cursor: 'pointer', color: 'blue' }}
                     >
                         {ingredient}
                     </li>
                    ))}
                </ul>
               {selectedIngredient && (
                <div>
                    <h3>Selected Ingredient:</h3>
                    <p>{selectedIngredient}</p>
                </div>
            )}            
      



        </div>
    );
};

export default Cocktail;
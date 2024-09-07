import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cocktailAPI } from '../../API';

const Ingredient = () => {
    const {name} = useParams()
    // console.log(name);
const [data, setData] = useState({})


    const getIngredientDetail = async () => {
        const res = await cocktailAPI.getIngredient(name)
        setData(res.data.ingredients[0]);
        // console.log(res.data.ingredients[0]);
    }
    useEffect(() => {
        getIngredientDetail()
    }, [name])
    return (
        <div>
            {
                data &&
            <img src={`https://www.thecocktaildb.com/images/ingredients/${name}-Medium.png`} alt={data.strIngredient} />
            }
            <h1>{data.strIngredient}</h1>
            <p>Description: {data.strDescription ? data.strDescription : 'Описание нет!'}</p>
        </div>
    );
};

export default Ingredient;
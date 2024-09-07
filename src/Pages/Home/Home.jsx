import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { getAllCocktails } from '../../Redux/reducers/cocktailReducers';


const Home = () => {
    const { isLoading, cocktails } = useSelector(state => state.cocktails)
    const dispatch = useDispatch()

// console.log(cocktails);

      useEffect(() => {
        dispatch(getAllCocktails())
    }, [dispatch])



    return (
        <div>
            <Header />
            {
                isLoading && <Loader />
            }
            {
                cocktails.length > 0 &&
                cocktails.map(el => (
                    <div key={el.idDrink}>
                        <h2>{el.strDrink}</h2>
                        <img width={200} src={el.strDrinkThumb} alt={el.strDrink}  />
                    </div>
                ))
            }
        </div>
    );
};

export default Home;
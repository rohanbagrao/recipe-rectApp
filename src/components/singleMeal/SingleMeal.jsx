import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchSingleMeal } from '../../redux/features/mealSlice'
import { useSelector, useDispatch } from 'react-redux'

export const SingleMeal = () => {
    const { meal, loading } = useSelector((state) => ({ ...state.app }));

    const [modifiedMeal, setModifiedMeal] = useState([]);

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleMeal({ id }))
    }, [id]);

    useEffect(() => {
        if (meal.length > 0) {
            const {
                strMeal: name,
                strMealThumb: image,
                strArea: cousine,
                strTags: category,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
                strIngredient16,
                strIngredient17,
                strIngredient18,
                strIngredient19,
                strIngredient20


            } = meal[0];
            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
            strIngredient11,strIngredient12, strIngredient13,
            strIngredient14,strIngredient15,strIngredient16,
            strIngredient17,strIngredient18, strIngredient19,
            strIngredient20,];
            const newMeal = {
                name,
                image,
                cousine,
                category,
                instructions,
                ingredients
            };
            setModifiedMeal(newMeal);
        } else {
            setModifiedMeal(null);
        }
    }, [id, meal]);
    if (!modifiedMeal) {
        return <h2 className='section-title'>loading..</h2>
    } else {
        const { name, image, cousine, category, instructions, ingredients } = modifiedMeal;
        return (
            <>
                {loading ? (
                    <div className='spinner-grow' role='status'>
                        <span className="visually-hidden">loading...</span>

                    </div>
                ) : (
                    <section className='section meal-section' >
                        <Link to="/">
                            <button className='btn btn-danger' style={{ marginTop: "2rem" }} >Go Back</button>
                        </Link>
                        <h2 className='section-title'>{name}</h2>
                        <div className="meal">
                            <img src={image} alt={name} />
                            <div className='meal-info'>
                                <p>
                                    <span className='meal-data'>Name:</span>{name}
                                </p>
                                <p>
                                    <span className='meal-data' >Cousine:</span>{cousine}
                                </p>
                                <p>
                                    <span className='meal-data'>Category:</span>{category}
                                </p>
                                <p>
                                    <span className='meal-data'>Instructions:</span>{instructions}
                                </p>
                                <p>
                                    <span className='meal-data' >Ingredients:</span>
                                    {ingredients && ingredients.map((item, index) => {
                                        return item ? <span key={index}>{item},</span> : null;
                                    })}
                                </p>

                            </div>
                        </div>
                    </section>
                )}
            </>
        )

    }

}

export default SingleMeal
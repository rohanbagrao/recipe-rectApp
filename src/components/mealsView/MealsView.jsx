import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMeals } from '../../redux/features/mealSlice';
import { Link } from 'react-router-dom';
import SearchInput from '../searchInput/SearchInput';
import { MDBBtn } from 'mdb-react-ui-kit';

const MealsView = () => {
    const { meals, loading } = useSelector((state) => ({ ...state.app }));
    const [modifiedMeals, setModifiedMeals] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMeals());
    }, [])

    useEffect(() => {
        if (meals) {
            const newMeals = meals.map((item) => {
                const { idMeal, strMeal, strArea, strMealThumb, strTags } = item;
                return {
                    id: idMeal,
                    name: strMeal,
                    image: strMealThumb,
                    cuisine: strArea,
                    type: strTags,
                }
            })
            setModifiedMeals(newMeals)
        } else {
            setModifiedMeals([])
        }
    }, [meals]);

    if (loading) {
        return (
            <div className='spinner-grow' role="status">
                <span className='visually-hidden'>Loading...</span>
            </div>
        );
    };
    if (!meals) {
        return <h2>No recipe matched your search criteria</h2>
    }

    return (
        <div className='container'>
            <SearchInput />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {modifiedMeals.map((item) => {
                    const { id, name, image, cuisine, type } = item;
                    return (
                        <div className='col' key={id}>
                            <div>
                                <img src={image} alt={name} className="card-img-top" style={{ borderRadius: "20px" }} />
                                <div className='card-body' style={{ textAlign: "left" }}>
                                    <h5 className='card-title'>{name}</h5>
                                    {/* <h4 className='card-title'>{type}</h4> */}
                                    <p className='card-text'>cuisine :{cuisine}</p>
                                    <Link to={`/meal/${id}`}>
                                        <button className='btn btn-info' >Details</button>
                                    </Link>
                                    
                                    <MDBBtn rounded className='mx-2 justify-content-end' style={{marginRight:"2px"}} color='dark' onClick={()=> dispatch(removeRecipeFromSave(meals))}>
                                        Save
                                    </MDBBtn>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MealsView
import React, { useRef } from 'react';
import { fetchSearchMeal } from '../../redux/features/mealSlice';
import { useDispatch } from 'react-redux';
import './style.css'

const SearchInput = () => {

    const searchValue = useRef();

    const dispatch = useDispatch();

    const handleChange =() =>{
        const searchText = searchValue.current.value;
        dispatch(fetchSearchMeal({searchText}))
    } 

    const handleSubmit = (e) => {
       e.preventDefault();
    }
  return (
    <section className='section search'>
      
    <form className='search-form' action="submit" onSubmit={handleSubmit}>

        <div className='form-control'>
          <label htmlFor="name">Search Recipe</label>
          <input type="text" name='name' id='name' ref={searchValue} onChange={handleChange} />
        </div>

    </form>
    </section>
  )
}

export default SearchInput
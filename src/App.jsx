
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MealsView from './components/mealsView/MealsView'
import SingleMeal from './components/singleMeal/SingleMeal'
import Header from './components/header/Header'
import Save from './components/Save'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<MealsView />} />
        <Route path="/meal/:id" element={<SingleMeal />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </div>
  )
}

export default App

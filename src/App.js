import React from 'react'
import HomeScreen from './Pages/HomeScreen'
import Nav from './components/Nav'
import IndianMovies from './scripts/IndianMovies';
import TeluguMovies from './scripts/TeluguMovies';
import JapaneseMovies from './scripts/JapaneseMovies';
import SearchPage from './Pages/SearchPage';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

export default function App() {
  return (
    <div>
    <Router>
<Nav />
  <Routes >
    <Route exact path="/" element={<HomeScreen />} />
    <Route exact path="/Homepage" element={<HomeScreen />} />
    <Route exact path="/IndianMovies" element={<IndianMovies />} />
    <Route exact path="/TeluguMovies" element={<TeluguMovies />} />
    <Route exact path="/JapaneseMovies" element={<JapaneseMovies />} />
    <Route exact path="/Search" element={<SearchPage />} />
  </Routes>
</Router>
    </div>
  )
}

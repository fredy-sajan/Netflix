import React from 'react'
import './App.css'
import NavBar from "./Componetns/NavBar/NavBar";
import Banner from './Componetns/Banner/Banner';
import RowPost from './Componetns/RowPost/RowPost';
import {originals, action, trending, documentaries, comedy, romantic, horror} from './Constants/urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={trending} title="Trending" isSmall/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action}  title="Action" isSmall/>
      <RowPost url={documentaries} title="Documentaries" isSmall/>
      <RowPost url={romantic} title="Romance" isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall/>
      <RowPost url={horror} title="Horror" isSmall/>


    </div>
  );
}

export default App;

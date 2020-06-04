import React from 'react';
import './app.css';

//Import Components
import Header from '../header';
import ItemList from '../item-list';
import PersonDetail from '../person-detail';
// import PlanetDetail from '../planet-detail';
import RandomPlanet from '../random-planet';
// import StarshipDetail from '../starship-detail';

const App = () => {
    return (
        <div className="container">
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetail />
                </div>
            </div>
        </div>
    )
}

export default App;
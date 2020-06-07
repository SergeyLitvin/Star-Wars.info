import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service'

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
        console.log('state after planet loaded', planet)
    };

    randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    updatePlanet() {
        const id = this.randomInteger(2, 18);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {
        const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`../../assets/img/planets/${id}.jpg`} alt="Random planet"/>
                <div>
                    <h4>{ name }</h4>
                    <ul className='list-group list-group-flush'>
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ diameter }</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

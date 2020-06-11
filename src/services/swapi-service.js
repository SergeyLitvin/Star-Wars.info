export default class SwapiService {
    _baseUrl = `https://swapi.dev/api/`;

    async getResource(url) {
        const res = await fetch(this._baseUrl + url);
        if(!res.ok) {
            throw new Error(`${url}, received ${res.status}`);
        }
        const data = await res.json();
        return data;
    }

    async getAllPeople(url) {
        const allPeople = await this.getResource('people/');
        return allPeople.results;
    }

    async getPeople(id) {
        const peopleId = parseInt(id, 10);
        if(typeof peopleId !== 'number' || isNaN(peopleId)) {
            console.warn('People id must be a number!');
        } else {
            const people = await this.getResource(`people/${peopleId}`);
            return this._transformPerson(people);
        }
    }

    async getAllPlanets(url) {
        const planets = await this.getResource('planets/');
        return planets.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planetId = parseInt(id, 10);
        if(typeof planetId !== 'number' || isNaN(planetId)) {
            console.warn('Planet id must be a number!');
        } else {
            const planet = await this.getResource(`planets/${planetId}`);
            return this._transformPlanet(planet);
        }
    }

    async getAllStarships(url) {
        const starships = await this.getResource('starships/');
        return starships.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starshipId = parseInt(id, 10);
        if(typeof starshipId !== 'number' || isNaN(starshipId)) {
            console.warn('Starship id must be a number!');
        } else {
            const starship = await this.getResource(`starships/${starshipId}`);
            return this._transformStarship(starship);
        }
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,

        }
    }
}
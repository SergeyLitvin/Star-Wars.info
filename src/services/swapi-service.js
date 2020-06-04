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
        const res = await this.getResource('people/');
        return res.results;
    }

    async getPerson(id) {
        const peopleId = parseInt(id, 10);
        if(typeof peopleId !== 'number' || isNaN(peopleId)) {
            console.warn('People id must be a number!');
        } else {
            const res = await this.getResource(`people/${peopleId}`);
            return res;
        }

    }

    async getAllPlanets(url) {
        const res = await this.getResource('planets/');
        return res.results;
    }


    async getPlanet(id) {
        const planetId = parseInt(id, 10);
        if(typeof planetId !== 'number' || isNaN(planetId)) {
            console.warn('Planet id must be a number!');
        } else {
            const res = await this.getResource(`planets/${planetId}`);
            return res;
        }
    }

    async getAllStarships(url) {
        const res = await this.getResource('starships/');
        return res.results;
    }

    async getStarship(id) {
        const starshipId = parseInt(id, 10);
        if(typeof starshipId !== 'number' || isNaN(starshipId)) {
            console.warn('Starship id must be a number!');
        } else {
            const res = await this.getResource(`starships/${starshipId}`);
            return res;
        }
    }
}
console.log('Hello JS Djeday');

const getResource = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

getResource('https://swapi.dev/api/people/1')
    .then((data) => {
        console.log('Luke Skywalker', data);
    })
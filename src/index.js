console.log('Hello JS Djeday');

const getResource = async (url) => {
    const res = await fetch(url);
    if(!res.ok) {
        throw new Error(` ${url}, received ${res.status}`);
    }


    const data = await res.json();
    return data;
}

getResource('https://swapi.dev/api/people/11')
    .then((data) => {
        console.log('Response data', data);
    })
    .catch((err) => {
        console.error('Coud not fetch', err);
    })
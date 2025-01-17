// el nombre va en mayuscula por que es un componente de la web. si es compuesto usamos camelCase

import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {

    const id = getHash();
    const character = await getData(id);
    console.log(character);
    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>

            <article class="Characters-card">
                <h3>Episodes: <span>${character.episode.length}</span></h3>
                <h3>Status:<span>${character.status}</span></ </h3>
                <h3>Species: <span>${character.species}</span></</h3>
                <h3>Gender: <span>${character.gender}</span></</h3>
                <h3>Origin: <span>${character.origin.name}</span></</h3>
                <h3>Last Location: <span>${character.location.name}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Character;
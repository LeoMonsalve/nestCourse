
interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon ={
    id:1,
    name:'bulbasaur',   
}

export const charmander:Pokemon={
    id: 2,
    name: 'Charmander'
}

export const pokemons:Pokemon[]=[];

pokemons.push(charmander, bulbasaur);
import { HttpAdapter, PokeApiAdapter } from '../api/pokeApi.adapter';
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';
import axios from 'axios';

export class Pokemon{

   /* public id: number;
    public name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        console.log('constructor llamado')
    }*/

    get imageUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`
    }

// forma corta de crear clases
    constructor(
        public readonly id:number,
        public name: string,
        //TODO: Inyecctar dependencias;
        private readonly http: HttpAdapter
        
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]>{
       // const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data  = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves)
        
        return data.moves;
    }

}

const pokeapi = new PokeApiAdapter();
const PokeApiFetchAdapter = new PokeApiAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeapi);

// console.log(charmander)

// charmander.speak();
// charmander.scream();
// console.log(charmander.getMoves())
charmander.getMoves();
// INITIALSTATE
const initialState = {
  // from db
  id: 0,
  name: '',
  favorite_animal: '',
  favorite_restaurant: '',
  isHappy: false,
  // from outside api
  pokemon: [{name: 'Pikachu'}, {name: 'Squirtle'}],
  // inside Redux
  wordOfTheDay: ''
}

// CONSTANTS (ACTIONS)
const GET_POKEMON = 'GET_POKEMON'

// ACTION CREATORS
export function getPokemon(allPokemon) {
  return {
    type: GET_POKEMON,
    payload: allPokemon
  }
}

// REDUCER FUNCTION

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_POKEMON:
      return Object.assign({}, state, {pokemon: action.payload});

    default: 
      return state;
  }
}
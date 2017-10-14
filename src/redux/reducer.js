// INITIALSTATE
const initialState = {
  // from db
  dbUsers: [],
  user: {
    name: '',
    id: 0
  },
  id: 0,
  name: '',
  favorite_animal: '',
  favorite_restaurant: '',
  isHappy: false,
  // from outside API
  pokemon: [{name: 'Pikachu'}, {name: 'Squirtle'}],
  // inside Redux
  wordOfTheDay: ''
}

// CONSTANTS (ACTIONS)
const GET_POKEMON= 'GET_POKEMON'
const SET_DB_DATA = 'SET_DB_DATA'

// ACTION CREATORS
export function getPokemon(allPokemon) {
  return {
    type: GET_POKEMON,
    payload: allPokemon
  }
}
export function setDBdata(allData) {
  return {
    type: SET_DB_DATA,
    payload: allData
  }
}

// REDUCER FUNCTION

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_POKEMON:
      return Object.assign({}, state, {pokemon: action.payload});
    case SET_DB_DATA:
      return Object.assign({}, state, {user: action.payload})

    default: 
      return state;
  }
}
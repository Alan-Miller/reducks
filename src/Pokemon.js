import React, { Component } from 'react';
import axios from 'axios';
import { getPokemon } from './redux/reducer';
import { connect } from 'react-redux';

class Pokemon extends Component {

  componentDidMount() {
    const {getPokemon} = this.props;
    setTimeout(_ => {
      axios.get('http://pokeapi.co/api/v2/pokemon/?limit=1000')
      .then(response => {
        console.log('pokeResponse', response);
        getPokemon(response.data.results);
      })
    }, 3000)
  }


  render() {
    
    return (
      <div>
        <h1>Pokemon</h1>
        <h4>component subscribes to pokemon on Redux, changes to response from API</h4>
        {this.props.pokemon.map((item, i) => {
          return <div key={i}>{item.name}</div>
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!state) return {};
  return {pokemon: state.pokemon};
}

export default connect(mapStateToProps, {getPokemon})(Pokemon);
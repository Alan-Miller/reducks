import React, { Component } from 'react';
import axios from 'axios';
import { getPokemon } from './redux/reducer';
import { connect } from 'react-redux';

class Pokemon extends Component {

  componentDidMount() {
    const {getPokemon} = this.props;
    axios.get('http://pokeapi.co/api/v2/pokemon/?limit=1000')
    .then(response => {
      console.log('pokeResponse', response);
      getPokemon(response.data.results);
    });
  }


  render() {
    
    return (
      <div className="content">
        <h1>Pokemon Component can:</h1>
        <h3>subscribe to pokemon on Redux state</h3>
        <h3>use componentDidMount to get more pokemon from API</h3>
        <h3>use getPokemon action creator to save API response to Redux</h3>
        <h2>list of pokemon:</h2>
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

export default connect(mapStateToProps, {getPokemon: getPokemon})(Pokemon);
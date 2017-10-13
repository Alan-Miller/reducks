import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from './redux/reducer';

class Word extends Component {

  render() {

    return (
      <div className="content">
        <h1>Word Component can:</h1>
        <h3>subscribe to pokemon on Redux state</h3>
        <h3>use getPokemon action creator to save hard-coded array to Redux</h3>
        <div className="changeButton" onClick={_ => this.props.getPokemon([{name: 'Butterfree'}, {name: 'Wigglytuff'}])}>Change Pokemon</div>
        <h2>list of pokemon:</h2>
        {this.props.pokemon.map((item, i) => {
          return <div key={i}>{item.name}</div>
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {pokemon: state.pokemon}
}

export default connect(mapStateToProps, { getPokemon })( Word );
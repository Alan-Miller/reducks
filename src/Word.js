import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from './redux/reducer';

class Word extends Component {

  render() {

    return (
      <div>
        <h1>Word of the day: quidnunc</h1>
        <h4>component subscribes to pokemon on Redux and can change it</h4>
        <div className="changeButton" onClick={_ => this.props.getPokemon([{name: 'Butterfree'}, {name: 'Wigglytuff'}])}>Change Pokemon</div>
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
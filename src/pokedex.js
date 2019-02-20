import React, { Component } from 'react';
import { Route, withRouter, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './assets/images/pokeball.svg';
import pokedex from './assets/images/pokedex.png';
import './assets/stylesheets/pokedex.scss';
import { requestAllTypes } from './actions/pokemon_actions';

import PokemonIndex from './components/pokemon_index';
import PokemonDetail from './components/pokemon_detail'

class Pokedex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    this.props.requestAllTypes();
    
  }

  handleChange() {
    return (e) => {
      this.setState({ query: e.target.value })
    };
  }

  render() {   
    return (
      <>
        <nav className='nav-bar'>
          <Link to="/home" >
            <img id="logo" src={logo} alt='Pokeball Logo' />
            <img id="pokedex" src={pokedex} alt='Pokeball Logo' />
          </Link>

          <span><form className="search-form">
            <input
              type="text"
              value={this.state.query}
              placeholder=" 🔍   Search..."
              onMouseOver={(e) => e.target.placeholder = " 🔍   ...by Name, Type or I.D."}
              onMouseOut={(e) => e.target.placeholder = " 🔍   Search..."} 
              onChange={this.handleChange()}
            ></input>
          </form></span>
          
        </nav>

        <div className="flexed">
          <Switch>
            <Route path="/:pokemon" component={PokemonDetail} />
            <Route path="/" component={PokemonDetail} />
          </Switch>
          <PokemonIndex searchQuery={this.state.query} types={this.props.types} />
        </div>
      </>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  const types = Object.values(state.entities.types).map( el => el.name );
  return ({
    types
    // loading: state.ui.loading.indexLoading
  })
};

const mapDispatchToProps = dispatch => ({
  requestAllTypes: () => dispatch(requestAllTypes())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokedex));

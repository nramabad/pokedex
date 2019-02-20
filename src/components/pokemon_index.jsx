import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { requestAllPokemon, requestOneType } from '../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends Component {
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    componentDidUpdate(prevProps) {
        if (this.props.types.length !== prevProps.types.length) {
            this.props.types.forEach( type => this.props.requestOneType(type) );
        }
    }

    typeMatch(term, name) {
        return term.length > 1 && name.substr(0, term.length).toLowerCase() === term
    }

    render() {
        let { pokemon, history, location } = this.props;
        let pokeOfTypes = [];
        const term = this.props.searchQuery.toLowerCase();

        this.props.typesInfo
            .filter( type => this.typeMatch(term, type.name) )
            .forEach(type => type.pokemon.forEach(poke => {
                if (!pokeOfTypes.includes(poke.pokemon.name)) {
                    pokeOfTypes.push(poke.pokemon.name) 
                }
            }));

        pokemon = pokemon.filter( poke => 
            poke.name.substr(0, term.length).toLowerCase() === term || 
            poke.url.slice(34, -1) === term || 
            pokeOfTypes.includes(poke.name)) ;

        if (pokemon.length === 0) {
            return (
                <section className="pokedex" >
                    <ul id="no-results">No Results</ul>
                </section>
            );
        } 

        return (
            <section className="pokedex">                
                <ul>
                    {pokemon.map ( (poke, idx) => (
                        <PokemonIndexItem 
                            key={poke.url.slice(34, -1)} 
                            pokemon={poke} 
                            history={history} 
                            location={location}/>
                    ))}    
                </ul>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const pokemon = Object.values(state.entities.pokemon);
    const typesInfo = Object.values(state.entities.types);
    return ({
        pokemon,
        typesInfo
    })
};

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon()),
    requestOneType: name => dispatch(requestOneType(name)),
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonIndex));

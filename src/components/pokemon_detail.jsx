import { connect } from 'react-redux';
import { requestOnePokemon, requestOneSpecies } from '../actions/pokemon_actions';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PokemonDetail extends Component {
    componentDidMount() {
        this.props.requestOnePokemon(this.props.match.params.pokemon);
        this.props.requestOneSpecies(this.props.match.params.pokemon);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
            this.props.requestOnePokemon(this.props.match.params.pokemon);
            this.props.requestOneSpecies(this.props.match.params.pokemon);
        }
    }

    areDetailsLoading(pokemon, species) {
        return !pokemon || 
            !pokemon.name || 
            !species.habitat || 
            !species.flavor_text_entries || 
            this.props.location.pathname === "/home"
    }

    render() {
        const { pokemon, species } = this.props;

        if (this.areDetailsLoading(pokemon, species)) return (
            <section className="pokemon-detail">
                <div><h2><br /><br /><br /><br /><br />
                    Choose a Pokemon
                    <br /><i>or</i><br />
                    Search by Name, Type or I.D.
                </h2></div>
            </section>
        );
        

        return (
            <section className="pokemon-detail">
                <figure>
                    <img 
                        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} 
                        alt={pokemon.name} />
                </figure>

                <ul>
                    <div>
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    </div>

                    <div id="flavor-text">
                        {species.flavor_text_entries
                            .filter (entry => entry.language.name === "en")[0].flavor_text}
                    </div>

                    <div><b>I.D.:</b> {pokemon.id}</div>
                    <div><b>Types: </b>
                        {pokemon.types ? pokemon.types.map(el => el.type.name).join(", ") : pokemon.types}
                    </div>
                    <div><b>Height:</b> {pokemon.height}</div>
                    <div><b>Weight:</b> {pokemon.weight}</div>
                    <div><b>Habitat:</b> {species.habitat.name}</div>
                </ul>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    const pokemon = state.entities.onepoke;
    const species = state.entities.species

    return {
        pokemon,
        species
    };
};

const mapDispatchToProps = dispatch => ({
    requestOnePokemon: id => dispatch(requestOnePokemon(id)),
    requestOneSpecies: id => dispatch(requestOneSpecies(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail));
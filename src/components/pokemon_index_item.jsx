import React from 'react';

class PokemonIndexItem extends React.Component {
	constructor(props){
		super(props);
	}

	handleHover(){
		let { pokemon } = this.props;
		const path = `/${pokemon.url.slice(34, -1)}`
		if (path !== this.props.location.pathname) {
			return (e) => {
				return this.props.history.push(path);
			}
		}
	}

	formatTypes(types) {
		return types.map(el => el.type.name).join(", ");
	}

	render() {
		let { pokemon } = this.props;
		const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
		const types = pokemon.types ? this.formatTypes(pokemon.types) : pokemon.types

		return (
				<li className="pokemon-index-item" onMouseOver={this.handleHover()}>
					<div>
						<span>
							<img 
								src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`} 
								alt={name} />
						</span>
						<span>{name}</span>
					</div>
					<div>{types}</div>
				</li> 
			)
	}
}

export default PokemonIndexItem;
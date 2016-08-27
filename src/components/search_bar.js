import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
	
	//constructor function
	constructor(props) {
		//super calls the Component method (calling the parent method with super)
		super(props);
		//this is how you initialize the state, containing properties and values we want
		this.state = {term:''};
	}
	render() {
		return ( 
		<div className='search-bar'>
		<input 
		value={this.state.term}
		onChange={event => this.onInputChange(event.target.value)} />
		</div>
		);

	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

};
	// onInputChange(event) {
	// 	console.log(event.target.value);

	// }





export default SearchBar;
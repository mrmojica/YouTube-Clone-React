import _ from 'lodash'; //reduces reloading speed on search
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDksU5b6Wxui4e_9eKywqnlUqSp5ZZTNgc';




class App extends React.Component {
	constructor(props){
		super(props);

		//contain empty list of videos
		this.state = {
			videos:[],
			//set to null since we dont have a selected video to start with
			selectedVideo: null
		};

		this.videoSearch('surfboards');

	}

//implement search input
	videoSearch(term) {
		//searches api videos (url, options, callback)
		YTSearch({key: API_KEY, term: term}, (videos) => {
		//console.log(videos);
			// this.setState({videos});  (less code w/ shorter syntax)
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});

		});
	}

	render() {
		//created callback to search by search term added lodash to delay reload
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
		return ( 
		<div>
			<SearchBar onSearchTermChange={videoSearch} />
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList
			//takes vide and defines it on App state (updates app state (adding a function that manipulates another component)).
			onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
			videos={this.state.videos} />

		</div>
	);
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));


// above in the render() adding the value videos is like targeting props.videos with a value from the VideoList component

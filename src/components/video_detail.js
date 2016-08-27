import React from 'react';


//video detail will not need to maintain a state.  so it only really needs to care about the title/description/url, available through props from app component
// we will just need a functional component.

//we use {video} (es6 feature) instead of props since we only need props.video
const VideoDetail = ({video}) => {

	//we add a check because the index.js is always running and there is a point no video is being rendered since video array initial state is [empty]
	if(!video) {
		return <div>Loading...</div>
	}


	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className='video-detail col-md-8'>
			<div className='embed-responsive embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>



	);
};

export default VideoDetail;
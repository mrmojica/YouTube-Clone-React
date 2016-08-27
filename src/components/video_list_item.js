import React from 'react';

//by putting {video} in the parameter its the same as props.video //added additional property onVideoSelect (all wraped in brackets ES6)
const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video;	= video
	// const onVideoSelect = props.onVideoSelect;	=onVideoSelect
	console.log(video);
//defined the api video thumbnail	
const imageUrl = video.snippet.thumbnails.default.url;


	return (

		//displays the list of videos images and titles
		//added event onclick={() => onVideoSelect(video)} function that runs onVideoSelect function  so when li clicked it will select video and run function onVideoSelect.
		<li onClick={ () => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={imageUrl} />
				</div>
				<div className='media-body'>
					<div className='media-heading'>{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
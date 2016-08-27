import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	//we have an array thats returning another array
	const videoItems = props.videos.map((video) => {
		//key= video.etag is selecting the videosAPI unique video ID ->etag (inside API video object)
		return (
			<VideoListItem 
				//passing callback function onvideoselect from index app component to VideoListItem component
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />

			);
	});


	return (
		<ul className='col-md-4 list-group' >	
		{videoItems}
		</ul>
		);

};


export default VideoList;
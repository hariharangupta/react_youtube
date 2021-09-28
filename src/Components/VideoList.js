import React, { Component } from 'react'

export class VideoList extends Component {


    videoListItems = () =>{
     let arr = this.props.videos.map( video => {
            return <li  onClick = { () => {this.props.onVideoSelected(video)} } key ={video.etag}> {video.snippet.title} <img src= {video.snippet.thumbnails.medium.url}></img>         
           </li>   
        })
        return arr
    }


    render() {
        return (
            <div>
                <h1>Im from VideoList</h1>
                <ul>
                    {this.videoListItems()}
                </ul>
            </div>
        )
    }
}

export default VideoList

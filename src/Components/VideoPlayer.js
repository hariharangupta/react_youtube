import React, { Component } from "react";

export class VideoPlayer extends Component {
  render() {
    console.log("selectedVideo", this.props.video);

    let video = this.props.video;

    var v = Object.assign({}, video);

    var x = Object.assign({}, v.id);

    let videoId = x.videoId;
    let src =`https://www.youtube.com/embed/${videoId}`
    console.log(src)
    
    return (
      <div>
        <iframe width="560" height="315" src={src}></iframe>
      </div>
    );
  }
}

export default VideoPlayer;

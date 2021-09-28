import React, { Component } from 'react'
import YoutubeApi from "youtube-api-search";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

const APIKEY = "AIzaSyDMijJugT6BlkUm3Z-9LQiHbOPHto7gxs0";
export class YoutubeDashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             videos:[],
             SelectedVideos:null
        }
    }
    componentDidMount(){
        
        this.FetchYoutubevideos("")
    }

         FetchYoutubevideos = (term) => {
             console.log("serchTerm", term)
            let currentObject =this
            YoutubeApi(
                { 
                    key:APIKEY ,
                    term:term
                }, videos => {
                    currentObject.setState ({videos:videos, SelectedVideos:videos[0]})
                    console.log(videos)
                }
             )
         }
      

    
    render() {
        return (
            <div>
                <h1>Hello I'M From YoutubeDashboard</h1>
                <SearchBar  onsearchTerm = { (term) =>  this.FetchYoutubevideos(term)} />
                <VideoPlayer video = {this.state.SelectedVideos} />
                <VideoList  onVideoSelected = {SelectedVideos =>{this.setState({SelectedVideos:SelectedVideos})}}  videos = {this.state.videos} />
            </div>
        )
    }
}

export default YoutubeDashboard

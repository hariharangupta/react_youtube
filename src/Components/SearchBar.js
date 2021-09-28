import React, { Component } from 'react'

export class SearchBar extends Component { 
    constructor() {
        super()
    
        this.state = {
              term: ""
        }
    }
    SearchTermInput = (event) =>{
          event.preventDefault();
          this.props.onsearchTerm(this.state.term)
    }
    
    render() {
        return (
            <div>
                <h1> I 'm from SearchBar</h1>
                <input onChange = {event => {this.setState({term : event.target.value})}} type="text" name = "term" size = "60" heigh = "30px"></input>
                <button onClick = {this.SearchTermInput}>Search</button>
            </div>
        )
    }
}

export default SearchBar

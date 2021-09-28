import React, { Component } from 'react'
import axios from 'axios';

export class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products: []
        }
    }
    componentDidMount(){
        console.log("componentDidMount is called")
        axios.get("http://localhost:9017/admin/allProducts").then(
            response =>{
                console.log(response.data)
            },
            error =>{
                console.log(error.message)
            }
        )
    }
    
    render() {
        return (
            <div>
                <h1>I'M from Products</h1>
            </div>
        )
    }
}

export default Products

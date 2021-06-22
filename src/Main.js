import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'
import { CardColumns } from 'react-bootstrap'
import './Main.css';
class Main extends Component {
    raiseVotes=(votes)=>{
        return votes+1
    }
    render() {
        
              
        return (
            <div class='card'>
              <CardColumns>
              {data.map(beast=>{ return <HornedBeast 
              title={beast.title} 
              description={beast.description}
               image_url={beast.image_url}
                votes={beast.votes} 
                totalVotes={this.raiseVotes}/>})
               
              }
              </CardColumns>
            </div>
        )
    }
}

export default Main
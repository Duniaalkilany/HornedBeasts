import React, { Component } from 'react'
import HornedBeast from './HornedBeast.js';
import { CardColumns } from 'react-bootstrap'
import './Main.css';

class Main extends Component {
    // raiseVotes=(votes)=>{
    //     return votes+1
    // }
    render() {
        
              
        return (
            // <div class='card'>
              <CardColumns>
              {
              this.props.data.map(beast=>{ 
                 return(
                    <HornedBeast
                    title={beast.title} 
                    description={beast.description}
                     image_url={beast.image_url}
                      votes={beast.votes} 
                      totalVotes={this.raiseVotes}
                      showModal={this.props.selectedModal}/>
                 )
              
               
            })}
              </CardColumns>
            // </div>
        )
    }
}

export default Main
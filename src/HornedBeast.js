import React , {Component} from 'react';
import {Card}from 'react-bootstrap';
// import {CardDeck}from 'react-bootstrap';
// import {CardGroup}from 'react-bootstrap';
import {CardColumns} from 'react-bootstrap'
import {br} from 'react-bootstrap';
class HornedBeast extends Component {
constructor(props){
    super(props);
    this.state={
        
        votes:0
    }
}

changeVotes =()=>{
    this.setState({
        votes:this.state.votes+1
    })
}

    render(){
        return(
            <CardColumns>
            <Card border="dark" style={{ width: '35rem' , marginLeft : 400, }} bg="info" text = 'dark' >
            {/* <Card style={{ width: '18rem' }}> */}
  <Card.Img variant="top" src={this.props.image_url}  onClick={this.changeVotes}alt ={this.props.title} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    
    </Card.Text>
    <Card.Text>
    <i class="fas fa-heart">favorited: {this.state.votes}</i>
    </Card.Text>
  
  </Card.Body>
 
</Card>
</CardColumns>



            // <div>
            //     <h2>{this.props.title}</h2>
            //     <img src={this.props.image_url} alt ={this.props.title} onClick={this.changeVotes}/>
            //     <p>{this.props.description}</p>
            //     <p>favorited: {this.state.votes}
            //     </p>
                
            // </div>
        )
    }
}

export default HornedBeast
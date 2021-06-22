



import React , {Component} from 'react';
import {Card}from 'react-bootstrap';
// import {CardDeck}from 'react-bootstrap';
// import {CardGroup}from 'react-bootstrap';
import {CardColumns} from 'react-bootstrap';
import {ListGroup}from 'react-bootstrap';

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
            <div>
            <Card border="dark" style={{ width: '25rem',height:'550px'   }} bg="info" text = 'dark' >
            {/* <Card style={{ width: '18rem' }}> */}
            

  <Card.Img variant="top"  style={{ width: '24.88rem',height:'300px'  }}  src={this.props.  image_url}  onClick={this.changeVotes}alt ={this.props.title} />
  <ListGroup variant="flush" style={{ width: '25rem',height:'250px'}}>
  <Card.Body>
  <ListGroup.Item><Card.Title>{this.props.title}</Card.Title></ListGroup.Item>
  <ListGroup.Item> <Card.Text>
    {this.props.description}
    
    </Card.Text></ListGroup.Item>
    <ListGroup.Item><Card.Text>
    <i class="fas fa-heart">favorited: {this.state.votes}</i>
    </Card.Text></ListGroup.Item>
  
  </Card.Body>
  </ListGroup>
 
</Card>
</div>


 



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





























// import React from 'react';
// import Card from 'react-bootstrap/Card';


// //             This will all need to track what was clicked and send it to App.js 
// //
// // x-------------------------------------------------------------------------------T O . D O-------x]]]]
// // "The onClick should be happening on the image instead of the Card." 
// //                           - TA Bryant
// //
// // [x] R E F A C T O R > C O D E
// // x-------------------------------------------------------------------------------T O . D O-------x]]]]

// class HornedBeast extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       slapaaHeartOnIt: 0,
//     }
//   }
//   buttonClicked = () => {
//   this.setState({slapaaHeartOnIt: this.state.slapaaHeartOnIt + 1});
//   this.props.showModal(this.props.title);
// }
//   render() {
    
//     // [x] R E F A C T O R > C O D E
//     const image = this.props.img;
//     const title = this.props.title;
//     const description = this.props.description;

//     return (
//       <div>
//         <Card style={{ width: '18rem' }}
//           onClick={this.buttonClicked}>
//             <Card.Img variant="top" src={image} />
//             <Card.Body>
//               <Card.Title>{title}</Card.Title>
//               <Card.Text>{description}</Card.Text>
//               <Card.Text>❤️ = {this.state.slapaaHeartOnIt}</Card.Text>
//             </Card.Body>
//         </Card>
//       </div>
//     )
//   }
// }

// export default HornedBeast;
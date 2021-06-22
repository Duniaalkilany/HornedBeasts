
import React from 'react';

import { Card, Button, Modal } from 'react-bootstrap';

// x-------------------------------------------------------------------------------T O . D O-------x]]]]
// [[[x- done]]] Create a SelectedBeast component and include it in your App.
//
// [[[x- done]]] Use the state in the App to render an individual beast in a 
//               Modal in the SelectedBeast component using React Bootstrap
//
// [x] Import a bootstrap "Block Level Button" - https://react-bootstrap.github.io/components/buttons/  
// [o] Style button with a hover color
// [x] Color Background
// [o] Set a margin of 10px between the rows
// [x] Style the H1 [import a google font?]
// [x] R E F A C T O R > C O D E
// x-------------------------------------------------------------------------------T O . D O-------x]]]]

class SelectedBeast extends React.Component {
  render(){
    
    // [x] R E F A C T O R > C O D E
    const displayModal = this.props.displayModal;
    const hideModal = this.props.hideModal;
    const image = this.props.selectedBeast.image_url;
    const title = this.props.selectedBeast.title;
    const description = this.props.selectedBeast.description;
    const keyword = this.props.selectedBeast.keyword;

    return (
      <Modal show={displayModal} onHide={this.props.hideModal}>
      <Modal.Dialog>
        <Modal.Header>
          <h2>Lil Horned Beasties</h2>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '26rem'}}>
        <Card.Img src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>{keyword}</Card.Text>
              <Button onClick = {hideModal} variant="primary" size="lg" block>C L O S E</Button>
            </Card.Body>
        </Card>
      </Modal.Body>
      </Modal.Dialog>
      </Modal>
    )
  }
}

export default SelectedBeast;
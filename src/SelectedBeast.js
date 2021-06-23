

import React, { Component } from 'react'

import {Card,Modal,Button} from 'react-bootstrap'

 class SelectedBeast extends Component {
    render() {
        return (
            <div>
                
      <Modal show={this.props.showData} >
        <Modal.Header>
          <Modal.Title>{this.props.dataForModal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card style={{ width: '26rem'}}>
        <Card.Img src={this.props.dataForModal. image_url} />
            <Card.Body>
              
              <Card.Text>{this.props.dataForModal.description}</Card.Text>
             
             
          <Button variant="secondary" onClick={this.props.exit}>
           close
          </Button>
            </Card.Body>
        </Card>



        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
                
            </div>
        )
    }
}

export default SelectedBeast


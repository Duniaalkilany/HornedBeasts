import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectedBeast from './SelectedBeast';
import hornsBeastData from './hornsBeastData .json';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
   hornsData: hornsBeastData ,
      displayModal: false,
  
      modalData: {}
    }
  }
  showModal = (data) => {

    this.setState({
    displayModal:true,
    modalData:data,
  });
  }

  hideModal = () => {this.setState({
    displayModal: false});
}
 
render(){
 
  return(
    <div>
      <Header/>
      
        <Main selectedModal={this.showModal}
        data={this.state.hornsData} />
        <SelectedBeast exit= {this.hideModal} showData={this.state.displayModal} dataForModal={this.state.modalData}/>
    <Footer />
    </div>
    
  )
}


}

export default App
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component{
 
render(){
 
  return(
    <div>
      <Header/>
      
        <Main  />
    <Footer />
    </div>
    
  )
}


}

export default App
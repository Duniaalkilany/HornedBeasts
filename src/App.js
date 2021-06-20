import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
//import HornedBeast from './HornedBeast';
class App extends React.Component{
render(){
 /* let hornedBeast = [
    {
        title:"UniWhal",
        description:"A unicorn and a narwhal nuzzling their horns"

    },
    {
        title:"Rhino Family",
        description:"Mother (or father) rhino with two babies"
    }
]*/
  return(
    <div>
      <Header/>
      
        <Main/>
    <Footer/>
    </div>
    
  )
}


}

export default App

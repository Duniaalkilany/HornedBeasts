import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

class Main extends Component {
    render() {
        let hornedBeast = [
            {
                title:"UniWhal",
                image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",

                description:"A unicorn and a narwhal nuzzling their horns"
        
            },
            {
                title:"Rhino Family",
            image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
                description:"Mother (or father) rhino with two babies"
            }
        ]

        return (
            <div>
                <HornedBeast title={hornedBeast[0].title} description={hornedBeast[0].description} image_url={hornedBeast[0].image_url}/>
         <HornedBeast title={hornedBeast[1].title} description={hornedBeast[1].description} image_url={hornedBeast[1].image_url}/>  
            </div>
        )
    }
}

export default Main

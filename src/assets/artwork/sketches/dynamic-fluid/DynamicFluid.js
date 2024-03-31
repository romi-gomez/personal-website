import React from 'react'
import * as p5 from "p5"
import styled from 'styled-components'

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

class DynamicFluid extends React.Component {
    constructor() {
        super()
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        if(typeof window !== 'undefined'){
            // Initialize global variables and constants
            let canvas
            let canvasWidth = document.getElementsByClassName("p5Canvas")[0].offsetWidth
            let canvasHeight = document.getElementsByClassName("p5Canvas")[0].offsetHeight


            //add your variables here


            p.preload = () => {
            // Preload media files
            }
             
            p.setup = () => {
                //initial setup to fit container size and handle mouse click on canvas
                p.frameRate(60)
                p.pixelDensity(2.0)
                p.noiseDetail(4)
        
                canvas = p.createCanvas(canvasWidth, canvasHeight, p.p2D);
                canvas.mouseClicked(p.handleClick)
                    
            }
     
            p.draw = () => {
                // Main draw loop
                p.background(100)
            }
    
            p.windowResized = () => {
                canvasWidth = document.getElementsByClassName("p5Canvas")[0].offsetWidth
                canvasHeight = document.getElementsByClassName("p5Canvas")[0].offsetHeight

                p.resizeCanvas(canvasWidth, canvasHeight)
            }
     
            p.handleClick = () => {
            
            }
     
            p.keyPressed = () => {
            // Handle key presses
            }

            //add new functions below
            p.frag = () => {

            }

            p.vert = () => {

            }
    }
}
// React things to make p5.js work properly and not lag when leaving the current page below
componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
}

componentDidUpdate() {
    this.myP5.remove()
    this.myP5 = new p5(this.Sketch, this.myRef.current)
}

componentWillUnmount() {
    this.myP5.remove()
}
//emperador colgado ermitano

render() {
    return (
        <Frame className="p5Canvas" ref={this.myRef}> </Frame>
    )
}
}

export default DynamicFluid
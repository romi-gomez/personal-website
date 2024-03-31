import React from 'react'
import * as p5 from "p5"
import styled from 'styled-components'

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

class Memory extends React.Component {
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
                // // Main draw loop
                // p.background(220); // Set the background color
                // p.noFill(); // Don't fill the shapes
                // p.strokeWeight(1); // Set the weight of the stroke
            
                // let centerX = canvasWidth / 2;
                // let centerY = canvasHeight / 2;
                // let maxRadius = Math.min(centerX, centerY);
            
                // // Draw concentric circles
                // for (let radius = maxRadius; radius > 0; radius -= 20) {
                //     p.ellipse(centerX, centerY, radius * 2, radius * 2);
                // }
            
                // // Draw lines
                // for (let angle = 0; angle < 360; angle += 10) {
                //     let radian = p.radians(angle);
                //     let x = centerX + maxRadius * p.cos(radian);
                //     let y = centerY + maxRadius * p.sin(radian);
                //     p.line(centerX, centerY, x, y);
                // }

                    // Main draw loop
    p.background(220); // Set the background color
    p.strokeWeight(1); // Set the weight of the stroke

    let centerX = canvasWidth / 2;
    let centerY = canvasHeight / 2;
    let maxRadius = Math.min(centerX, centerY);

    // Draw concentric circles
    for (let radius = maxRadius; radius > 0; radius -= 20) {
        p.ellipse(centerX, centerY, radius * 2, radius * 2);
    }

    // Draw lines and rectangles
    for (let angle = 0; angle < 360; angle += 10) {
        let radian = p.radians(angle);
        let x = centerX + maxRadius * p.cos(radian);
        let y = centerY + maxRadius * p.sin(radian);
        p.line(centerX, centerY, x, y);

        // Draw rectangles
        for (let radius = maxRadius; radius > 20; radius -= 20) {
            let x1 = centerX + radius * p.cos(radian);
            let y1 = centerY + radius * p.sin(radian);
            let x2 = centerX + (radius - 20) * p.cos(radian);
            let y2 = centerY + (radius - 20) * p.sin(radian);

            p.fill( p.random(100), p.random(105)); // Set a random color
        }
    }

            }
    
            p.windowResized = () => {
                canvasWidth = document.getElementsByClassName("p5Canvas")[0].offsetWidth
                canvasHeight = document.getElementsByClassName("p5Canvas")[0].offsetHeight

                p.resizeCanvas(canvasWidth, canvasHeight)
            }
     
            p.handleClick = () => {
            
            }
     
            p.keyPressed  =() => {
            // Handle key presses
            }

            //add new functions below
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

render() {
    return (
        <Frame className="p5Canvas" ref={this.myRef}> </Frame>
    )
}
}

export default Memory
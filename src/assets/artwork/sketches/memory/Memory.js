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
            let mx=-10000
            let my=-10000
            //these are coordinates for the ball. If you wanted to use your mouse,
            //you'd set these equal to MouseX and MouseY in mouseMoved()

            let prevX;
            let prevY;
            let newX;
            let newY;
            let speed = 2;
            let move=0;

            let a = [];
            let b= [];

            let d;
            //used when calculating distance between ball and point

            let randX;
            let randY;
            //the random speed at which the ball moves in X and Y


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
                    
                randX = p.random(1.5,2.5)
                randY = p.random(1.5,2.5)

                for(let i=0; i<150; i++){
                    a[i] = i*10
                    b[i] = i*10
                }
            }
     
            p.draw = () => {
                
                p.background(0)
                p.fill(255)
                p.stroke(255)

                //draw the vertical lines
                for(let i=0; i<a.length; i++){
                    prevX = -1
                    for(let j=0; j<b.length; j++){
                        d = p.dist(mx, my, a[i], b[j])

                        if(d==0){
                            d=0.0001
                        }

                        newX= a[i]-(100/d)*(mx-a[i])
                        newY= b[j]-(25/d)*(my-b[j])

                        p.ellipse(newX, newY, 2, 2)

                        if(prevX!=-1){
                            p.line(prevX, prevY, newX, newY)
                        }

                        prevX=newX
                        prevY=newY

                        //iterate through the array, calculate distance (d) between mouse
                        //and each point, then move each point by (25/d)*(mouseX-pointX) and in
                        //Y. I took a lot of mathematical liberty here and just fucked with it
                        //till it worked. The idea was that if the slope created by the ball and
                        //the point is 3/4 and I want to move the point by a factor of 5, 
                        //I move x by 5*4 points and y by 5*3. Someone who's good at math would
                        //write an equation that makes more sense

                    }
                }

                //draw the horizontal lines
                for(let j=0; j<b.length;j++){
                    prevX = -1
                    for(let i=0; i<a.length;i++){
                        d = p.dist(mx, my, a[i], b[j])

                        if(d==0){
                            d= 0.001
                        }

                        newX = a[i] - (25/d)*(mx-a[i])
                        newY = b[j] -(25/d)*(my-b[j])

                        if(prevX !=-1){
                            p.line(prevX, prevY, newX, newY)
                        }

                        prevX=newX
                        prevY=newY

                        p.stroke(255)
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

            p.mouseMoved = () => {
                mx = p.mouseX
                my = p.mouseY
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
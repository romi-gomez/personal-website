import React from 'react'
import styled from 'styled-components'
import "../assets/helpers/p5sound_fix"
import "p5/lib/addons/p5.sound"
import * as p5 from "p5"
import muladhara from '../assets/audio/Sahasara01.mp3'

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

class RotateGrid extends React.Component {
    constructor() {
        super()
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        if(typeof window !== 'undefined'){
            // Initialize global variables and constants
            let canvasWidth = document.getElementsByClassName("p5Canvas")[0].offsetWidth
            let canvasHeight = document.getElementsByClassName("p5Canvas")[0].offsetHeight
            
            let backgroundCapture
            let canvas

            let cellSize = 3; // size of each cell
            let columns = Math.floor(canvasWidth / cellSize);
            let rows = Math.floor(canvasHeight / cellSize);

            let sound
            let amp

            p.preload = () => {
                sound = p.loadSound(muladhara);
            }

            p.setup = () => {
                //p.pixelDensity(2.0)

                canvas = p.createCanvas(canvasWidth, canvasHeight, p.p2D)
                canvas.mouseClicked(p.handleClick)

                backgroundCapture=p.createCapture(p.VIDEO)
                backgroundCapture.size(canvasWidth,canvasHeight)

                p.rectMode(p.CENTER)
                amp = new p5.Amplitude()

            }

            p.draw = () => {    
                //p.background(255)
                let level = amp.getLevel()   
                let cellModifier = p.map(level, 0, 1, 0, 50)
                p.noStroke();    
                let a = 100;
                
                backgroundCapture.loadPixels()
                for(let i = 0; i < columns; i++){
                    for(let j = 0; j < rows; j++){
                        let x = (i * cellSize)
                        let y = (j * cellSize) 
                        let r = 0, g = 0, b = 0, count = 0;
                
                        // calculate the average color of the corresponding area in the video
                        for(let dx = 0; dx < cellSize; dx++){
                            for(let dy = 0; dy < cellSize; dy++){
                                let index = ((x + dx) + (y + dy) * canvasWidth) * 4;
                                r += backgroundCapture.pixels[index + 0]* cellModifier/3;
                                g += backgroundCapture.pixels[index + 1]* cellModifier/5;
                                b += backgroundCapture.pixels[index + 2]* cellModifier/2;
                                count++;
                            }
                        }
                        r /= count;
                        g /= count;
                        b /= count;

                        p.noFill();
                        p.push();
                            p.fill(r, g, b, a);
                            p.square(x, y, cellSize); 
                            p.rotate(p.PI/4*cellModifier/10);
                        p.pop();
                    }
                }
                p.filter(p.POSTERIZE, 10); // posterize the image
            }
            
            // Toggles song on click
            p.handleClick = () => {
                if (sound.isPlaying()) {
                    sound.pause();
                } else {
                    sound.play();
                }
            }

            // Cycles color palette on Space Bar press
            p.keyPressed  =() => {

            }
        }
    }

    // React things to make p5.js work properly and not lag when leaving the current page below
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
        console.log(this)
        console.log(this.myP5)
    }

    componentDidUpdate() {
        this.myP5.remove()
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    componentWillUnmount() {
        this.myP5.remove()
        if (this.myCapture) {
            this.myCapture.stop(); // stop the capture
        }
    }

    render() {
        return (
            <Frame className="p5Canvas" ref={this.myRef} />
        )
    }
}

export default RotateGrid
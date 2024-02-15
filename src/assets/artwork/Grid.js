import React from 'react'
import styled from 'styled-components'
import "./helpers/p5sound_fix"
import "p5/lib/addons/p5.sound"
import * as p5 from "p5"
import muladhara from './audio/Muladhara03.mp3'
import image from './images/garganta-06.jpg'

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
        
        let backgroundimg
        let imageWidth= window.innerWidth*1.5
        let imageHeight= window.innerHeight*1.5
        let sizeModifier = 1

        let bands = 1024
        let amp, fft, canvas, song

        const columns = 100
        const rows = 70


        // Loads the music file into p5.js to play on click
        p.preload = () => {
            p.soundFormats('mp3')
            song = p.loadSound(muladhara)
            backgroundimg=p.loadImage(image)
        }

        // Initial setup to create canvas and audio analyzers
        p.setup = () => {
           p.pixelDensity(2.0)

            canvas = p.createCanvas(canvasWidth, canvasHeight, p.WEBGL)
            canvas.mouseClicked(p.handleClick)

            //center canvas and set drawing mode to center
            p.imageMode(p.CENTER)
            p.rectMode(p.CENTER)
            p.translate(p.width / 2, p.height / 2);

            amp = new p5.Amplitude(0.1)
            fft = new p5.FFT(0.75, bands)

        }

        p.draw = () => {                  
            // Use overal song volume to detect "beats"
            let amplitude = amp.getLevel()*100

            //* START BACKGROUND CODE------------------------------------------------------------------*/

                p.noStroke()
                p.tint(255,255, 255, p.random(0)); // Display at half opacity
                p.noFill()
                p.push()
                    //p.rotate(30+p.int(amplitude*10))
                    p.image(backgroundimg, (0), (0), imageWidth+amplitude*100, imageHeight+amplitude*20)      
                p.pop()

                if(imageWidth>canvasWidth*3){
                    sizeModifier=-1
                }

                if(imageWidth<canvasWidth*2){
                    sizeModifier=1
                }
                
                imageWidth+=sizeModifier
                imageHeight+=sizeModifier

            //* END BACKGROUND CODE------------------------------------------------------------------*/

            //* START GRID CODE------------------------------------------------------------------*/
                p.fill(255,p.random(10))
                p.rect(0, 0, p.width, p.height)

                for (let x=p.width/columns+p.width/columns/2; x<p.width+100; x+=p.width/columns){
                    for (let y=p.height/rows+p.height/rows/2; y<p.height+100; y+=p.height/rows){
                        p.noFill()
                        const xcoord = x-p.width/2-p.width/columns
                        const ycoord = y-p.height/2-p.height/rows
                        let color = backgroundimg.get(x, y)
                        p.stroke(color)
                        p.stroke(color, p.int(p.random(10)))
                        p.square(xcoord, ycoord, amplitude*10)
                    }
                    //p.rotate(30+p.int(amplitude*10))
                }

            //* END GRID CODE------------------------------------------------------------------*/

        }

        // Toggles song on click
        p.handleClick = () => {
            if (song && song.isPlaying()) {
                    song.pause()
            } else {
                song.play()
            }
        }

        // Cycles color palette on Space Bar press
        p.keyPressed  =() => {
            if (p.keyCode === 32) {                             // 32 is the keycode for SPACE_BAR
                
            }
            return false; // prevent default
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

    render() {
        return (
            <Frame className="p5Canvas" ref={this.myRef} />
        )
    }
}

export default RotateGrid
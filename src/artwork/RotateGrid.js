import React from 'react'
import styled from 'styled-components'
import "../helpers/p5sound_fix"
import "p5/lib/addons/p5.sound"
import * as p5 from "p5"
import muladhara from './audio/Muladhara02.mp3'
import image from './../images/garganta-03.jpg'

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
        let imageWidth= window.innerWidth*2
        let imageHeight= window.innerHeight*2
        let sizeModifier = 1
        let imagePos = 0

        let bands = 1024
        let amp, fft, canvas, song
        let times = [0,0,0,0,0,0,0]

        let beatThreshold = 0.16
        let beatCutoff = 0
        let beatDecayRate = 0.9995
        let beatState = 0

        const columns = 150
        const rows = 100

        let selectFill=1

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
            p.angleMode(p.DEGREES)
            p.translate(p.width / 2, p.height / 2);

            amp = new p5.Amplitude(0.1)
            fft = new p5.FFT(0.75, bands)

        }

        p.draw = () => {                  
            // Use overal song volume to detect "beats"
            let amplitude = amp.getLevel()*100

            //* START BACKGROUND CODE------------------------------------------------------------------*/

                p.noStroke()
                p.tint(255,255, 255, p.random(10)); // Display at half opacity
                p.noFill()
                p.push()
                   p.rotate(30+p.int(amplitude*100))
                   p.image(backgroundimg, -p.width/2, -p.height/2, imageWidth+amplitude*500, imageHeight+amplitude*500)      
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
                p.fill(255,p.random(5))
                p.rect(0, 0, p.width, p.height)
                imagePos ++

                for (let x=0; x<p.width+100; x+=p.width/columns){
                    for (let y=0; y<p.height+100; y+=p.height/rows){
                        p.noFill()
                        const xcoord = x-p.width/2-p.width/columns
                        const ycoord = y-p.height/2-p.height/rows
                        let color = backgroundimg.get(x+p.width+imagePos, y+p.height+imagePos)

                        p.stroke(color,0.2)
                        
                        // selectFill = p.int(p.random(1,70))
                        // if(selectFill == 2){
                        //     p.fill(color,0.2)
                        // }

                        p.push()
                            p.circle(xcoord, ycoord, amplitude*100)
                        p.pop()
                        p.rotate(30+p.int(amplitude*50))
                        
                    }
                }

            //* END GRID CODE------------------------------------------------------------------*/
        }

        // Toggles song on click
        p.handleClick = () => {
            if (song && song.isPlaying()) {
                    song.pause()
            } else {
                song.loop()
            }
        }

        // Cycles color palette on Space Bar press
        p.keyPressed  =() => {
            if (p.keyCode === 32) {                             // 32 is the keycode for SPACE_BAR
                p.saveCanvas()
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
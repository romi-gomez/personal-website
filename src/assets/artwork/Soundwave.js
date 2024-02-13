import React from 'react'
import styled from 'styled-components'
import "./helpers/p5sound_fix"
import "p5/lib/addons/p5.sound"
import * as p5 from "p5"
import muladhara from './audio/Muladhara01.mp3'
import image from './images/tercerojo-01.jpg'

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

class Soundwave extends React.Component {
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
        let imageWidth= window.innerWidth*0.7
        let imageHeight= window.innerHeight*0.7
        let sizeModifier = 1

        let bands = 1024
        let amp, fft, canvas, song
        let times = [0,0,0,0,0,0,0]

        let beatThreshold = 0.16
        let beatCutoff = 0
        let beatDecayRate = 0.9995
        let beatState = 0


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
            let amplitude = amp.getLevel()*200
            p.tint(p.random(255),p.random(105), p.random(255), 1+amplitude/20); // Display at half opacity
            p.image(backgroundimg, (0), (0), imageWidth+amplitude, imageHeight+amplitude)      

            p.stroke(255, 255, 255)
            p.noFill()

            // p.push()
            // p.rotate(20+p.int(amplitude*10))
            // p.rect(0, 0, amplitude*5, amplitude*5)
            // p.pop()

            if(imageWidth>canvasWidth*2){
                sizeModifier=-1
            }

            if(imageWidth<canvasWidth){
                sizeModifier=1
            }
            
            imageWidth+=sizeModifier
            imageHeight+=sizeModifier
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

export default Soundwave
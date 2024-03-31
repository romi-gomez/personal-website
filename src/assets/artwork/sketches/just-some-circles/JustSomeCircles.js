import React from 'react'
import styled from 'styled-components'
import "../assets/helpers/p5sound_fix"
import "p5/lib/addons/p5.sound"
import * as p5 from "p5"
import muladhara from '../assets/audio/Muladhara02.mp3'

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
class justSomeCircles extends React.Component {
    constructor() {
        super()
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        if(typeof window !== 'undefined'){
             // Initialize global variables and constants
            let canvasWidth = document.getElementsByClassName("p5Canvas")[0].offsetWidth
            let canvasHeight = document.getElementsByClassName("p5Canvas")[0].offsetHeight
             
            let bands = 1024
            let amp, fft, canvas, song
             
            const columns = canvasWidth/100
            const rows = canvasHeight/100

             // Loads the music file into p5.js to play on click
             p.preload = () => {
                 p.soundFormats('mp3')
                 song = p.loadSound(muladhara)
             }
     
             // Initial setup to create canvas and audio analyzers
             p.setup = () => {
                p.frameRate(60)
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
                p.fill(255, p.random(10))
                p.noStroke()
                p.rect(0, 0, canvasWidth, canvasHeight)
                // Use overal song volume to detect "beats"
                let amplitude = amp.getLevel()*100
                let analyze = fft.analyze()

                const bass = fft.getEnergy(20, 500)
                const high = fft.getEnergy(500, 10000)
                const mid = fft.getEnergy(1000, 4000)

                p.strokeWeight(p.random(1, 5)*bass/100)
                p.noStroke()
                p.fill(100,100,p.random(0, 255), p.random(50))
                p.circle(0, 0, bass*10)
                p.fill(255,p.random(10))

                p.stroke(255, p.random(200))
                p.circle(0, 0, high*40)
                p.circle(300, 0, mid*50)
                p.circle(-300, 0, mid*50)

                p.circle(0, 200, high*40)
                p.circle(300, 200, mid*50)
                p.circle(-300, 200, mid*50)

                p.circle(0, -200, high*40)
                p.circle(300, -200, mid*50)
                p.circle(-300, -200, mid*50)
            }
     
             p.windowResized = () => {

            }
     
             // Toggles song on click
             p.handleClick = () => {
                 if (song.isPlaying()) {
                     if (song){
                         song.pause()
                     }
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

export default justSomeCircles
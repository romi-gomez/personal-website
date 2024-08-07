import React from 'react'
import styled from 'styled-components'
import "../assets/helpers/p5sound_fix"
import "p5/lib/addons/p5.sound"
import * as p5 from "p5"
import muladhara from '../assets/audio/Muladhara02.mp3'
import image from '../assets/images/pulsar.png'

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

class FakeChladniSquare extends React.Component {
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
        let backgroundColor 
        let imageWidth= window.innerWidth*1.5
        let imageHeight= window.innerHeight*1.5
        let sizeModifier = 1
        let color = p.color(255, 255, 255)

        let bands = 1024
        let amp, fft, canvas, song
        let count = 0

        const columns = 13
        const rows = 7


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

            count ++

            if(count>7){ 



            // Use overal song volume to detect "beats"
            let amplitude = amp.getLevel()*100
            color = p.color(255, 255, 255, p.random(255))

            if(amplitude>15){
            backgroundColor = backgroundimg.get(p.random(0, backgroundimg.width), p.random(0, backgroundimg.height ))
            }
            //* START BACKGROUND CODE------------------------------------------------------------------*/

                p.noStroke()
                p.tint(255,255, 255, p.random(0)); // Display at half opacity
                p.noFill()
                p.push()
                    p.rotate(30+p.int(amplitude*10))
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
                p.fill(backgroundColor,backgroundColor,backgroundColor,p.random(5))
                p.rect(0, 0, p.width, p.height)

                for (let x=p.width/columns+p.width/columns/2; x<p.width+100; x+=p.width/columns){
                   
                    for (let y=p.height/rows+p.height/rows/2; y<p.height+100; y+=p.height/rows){
                        p.noFill()
                        const xcoord = x-p.width/2-p.width/columns
                        const ycoord = y-p.height/2-p.height/rows
                        //let color = backgroundimg.get(x, y)

                        p.stroke(color, p.random(50))
                        p.strokeWeight(amplitude/10*(p.random(2)))
                        p.push()
                            p.rotate(30+p.int(amplitude*2))
                            p.square(xcoord, ycoord, amplitude*20)
                        p.pop()

                        p.stroke(color, p.random(50))
                        p.strokeWeight(amplitude/10*(p.random(5)))
                        for(let k=0; k<4; k++){
                            p.circle(xcoord, ycoord, amplitude*(k*10))
                        }

                        p.stroke(color, p.random(50))
                        p.strokeWeight(amplitude/10*(p.random(10)))
                        p.push()
                            p.rotate(p.int(-amplitude*3))
                            p.square(xcoord-(p.width/columns)/2, ycoord-(p.height/rows)/2, amplitude*10)
                        p.pop()
                        
                        p.stroke(color, p.random(50))
                        p.strokeWeight(amplitude/10*(p.random(2)))
                        p.square(xcoord-(p.width/columns)/2, ycoord-(p.height/rows)/2, amplitude*20)

                    }
                }

            //* END GRID CODE------------------------------------------------------------------*/



               count = 0     
            } 

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

export default FakeChladniSquare
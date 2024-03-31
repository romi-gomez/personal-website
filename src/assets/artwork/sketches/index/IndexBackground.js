import React from 'react'
import styled from 'styled-components'
import "../assets/helpers/p5sound_fix"
import "p5/lib/addons/p5.sound"
import * as p5 from "p5"

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
class SoundMountains extends React.Component {
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
             
            const columns = 100
            const rows = 100

            let color = 0;

            // Loads the music file into p5.js to play on click
            p.preload = () => {

            }
     
             // Initial setup to create canvas and audio analyzers
            p.setup = () => {
                p.background(51,51,51)
                p.frameRate(60)
                p.pixelDensity(2.0)

                canvas = p.createCanvas(canvasWidth, canvasHeight, p.WEBGL)
                canvas.mouseClicked(p.handleClick)

                color = p.random(255)
     
                //center canvas and set drawing mode to center
                // p.imageMode(p.CENTER)
                // p.rectMode(p.CENTER)
                // p.translate(p.width / 2, p.height / 2);

             }
     
            p.draw = () => {

                let lastX,lastY 
	
                p.translate(p.width/2,p.height/10)
                p.rotate(p.sin(p.frameCount/20)/50)
                p.rotate(p.frameCount/500)
                p.scale(p.pow(1/p.frameCount,0.108)-p.frameCount/10000000)
                p.translate(-p.width/8,-p.width/8)
                p.translate(-p.width/6,0)
	
                for(let y=0;y<p.width;y+=p.random(10,100)){
                    let ang = p.frameCount/100
                    //noise(ang+y/2,1000)*5
                    let r = p.noise(y/100,ang/10)*p.noise(y/20,1000)*p.noise(50,y/1000)*p.width*2
                    let x = r*p.cos(ang) 
                    let panX = p.random(-1,1)*1*p.cos(ang)/2
                    let panY = p.random(-1,1)*1*p.sin(ang)/2
                    // if (frameCount>100){
                    let panR = p.noise(ang,r)*5
                    panX+=p.noise(p.frameCount/50,x/50+ang*10,y/20)*panR
                    panY+=p.noise(x/80+ang*10,y/200,p.frameCount/50)*panR
                    // }
                    if (lastX){
                        p.point(x+panX,y+panY)
                        // line(x,y,lastX,lastY)
                        p.push()
                            p.strokeWeight(0.1)
                            for(let i=0;i<2;i++){
                                p.point(x+p.random(-5,5),y+p.random(-5,5))
                                
                            }
                        p.pop()
                    }
                    p.stroke(255,255,255,p.random(100,255))
                    p.strokeWeight(p.random(0.5,2))
                    if (y%60==0){
                        p.strokeWeight(p.random(1.5,2))
                    }
                    
                    // if (noise(x/10,y/10)>0.8){
                    // 	y+=10
                    // }
                    lastX = x
                    lastY = y
                    
                }
                
            }
     
            p.windowResized = () => {

            }
     
             // Toggles song on click
            p.handleClick = () => {

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

export default SoundMountains
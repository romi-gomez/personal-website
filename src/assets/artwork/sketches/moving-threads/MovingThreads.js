import React from 'react'
import * as p5 from "p5"
import styled from 'styled-components'

const Frame = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

class MovingThreads extends React.Component {
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
            let colors = ["#FFC30F", "#581845", "#900C3F", "#C70039", "#FF5733", "#FFC30F"];
            let cache = []

            const border = 0
            let interact = 200;

            p.preload = () => {
            // Preload media files
            }
             
            p.setup = () => {
                //initial setup to fit container size and handle mouse click on canvas
                p.frameRate(60)
                p.pixelDensity(2.0)
                p.noiseDetail(4)
                colors = colors.map(c => p.color(c))
        
                canvas = p.createCanvas(canvasWidth, canvasHeight, p.p2D);
                canvas.mouseClicked(p.handleClick)
                    
            }
     
            p.draw = () => {
                // Main draw loop
                p.background(255)
                const intensity = 90;
                const space = 10;
                const freq = 3;

                let time = p.frameCount/100;

                let counter = 0;

                p.strokeWeight(1)

                for(let y = border; y < canvasHeight - border; y += space) {
                    for(let x = border; x < canvasWidth - border; x += space) {
                        // OPTION 1 - AUTOMATIC
                        // let angle = p.noise(x / intensity, y / intensity, time) * p.TWO_PI * freq;
                        // let x2 = x + p.cos(angle) * space;
                        // let y2 = y + p.sin(angle) * space;
                        // p.stroke(colors[counter % colors.length])
                        // p.line(x, y, x2, y2)
                        // counter++

                        // OPTION 2 - ORIGINAL CODE
                        let noise = p.noise(x/100*freq + time, y/100*freq, time*2) + 0.14
                        let noise2 = noise;

                        if (counter == cache.length){
                            cache[counter] = {
                                c: p.lerpColors(noise, colors),
                                nx: (p.noise(x)-0.5)*30,
                                ny: (p.noise(y)-0.5)*30
                            }
                        }

                        let a = noise * p.TWO_PI;
                        let xxx = x + cache[counter].ny;
                        let yyy = y + cache[counter].nx;

                        let d = p.sq(xxx - p.mouseX) + p.sq(yyy - p.mouseY);
                        let l = 20

                        l *= (1-p.sqrt(d)/interact) * 3;

                        let xx = p.cos(a) * l + xxx;
                        let yy = p.sin(a) * l + yyy;
                        
                        p.stroke(cache[counter].c);
                        p.line(xxx, yyy, xx, yy);
                        
                        counter++;
                    }
                }

            }
    
            p.windowResized = () => {
                canvasWidth = document.getElementsByClassName("p5Canvas")[0].offsetWidth
                canvasHeight = document.getElementsByClassName("p5Canvas")[0].offsetHeight

                p.resizeCanvas(canvasWidth, canvasHeight)
            }
     
            p.handleClick = () => {
                interact +=50
            }
     
            p.keyPressed  =() => {
            // Handle key presses
            }

            p.lerpColors = (t, colors) => {
                const i = Math.floor(t*colors.length-1);
                if(i<0){return colors[0]}
                if(i>=colors.length-1){return colors[colors.length-1]}

                let percent = (t-i/(colors.length-1)) * (colors.length-1);
                return p.color(
                    colors[i]._getRed()+percent*(colors[i+1]._getRed()-colors[i]._getRed()),
                    colors[i]._getGreen()+percent*(colors[i+1]._getGreen()-colors[i]._getGreen()),
                    colors[i]._getBlue()+percent*(colors[i+1]._getBlue()-colors[i]._getBlue())
                )
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
        <Frame className="p5Canvas" ref={this.myRef}> </Frame>
    )
}
}

export default MovingThreads
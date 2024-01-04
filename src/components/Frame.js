import React from "react";
import { useEffect, useState, useRef} from "react";
import styled from "styled-components";

const FrameContainer =  styled.div `
    width:100%;
    height:100%;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    border-radius: 5px;
    overflow: hidden;   
    background:yellow;
    transform:${ props => {
            return props.$frameonfocus && props.$mouseposition?  
            "rotateX(" + (-(props.$mouseposition.y - props.$frameonfocus.frame.y - (props.$frameonfocus.frame.height/2))/props.$constraint) + "deg)" + 
            "rotateY(" + (-(props.$mouseposition.x - props.$frameonfocus.frame.x - (props.$frameonfocus.frame.width/2))/props.$constraint) + "deg)" + 
            "translateZ(" + 0 + "px)" 
            : ""
        }
    };  
`

export default function Frame(props) {
    const [frameOnFocus, setFrameOnFocus] = useState(null)
    const frameRef = useRef(null)

    const handleFrameHover = () => {
        
    } 

   const handleMouseMove = () => {
        setFrameOnFocus({id: props.id, frame: frameRef.current.getBoundingClientRect()})
        if(frameOnFocus) {
            console.log(frameOnFocus, props.mouseposition)
        }
        else return
   }
    
    return (
        <FrameContainer 
            ref={frameRef} 
            onMouseMove={handleMouseMove}
            $frameonfocus={frameOnFocus}
            $mouseposition={props.mouseposition}
            $constraint={20}>
            {props.children}
        </FrameContainer>
    )
}
import React from "react";
import { useEffect, useState, useRef} from "react";
import styled from "styled-components";

const FrameWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`    

const FrameContainer =  styled.div `
    width:90%;
    height:90%;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    border-radius: 5px;
    overflow: hidden;   
    background:#333333;
    transform:${ props => {
            return props.$frameonfocus && props.$mouseposition?  
            "rotateX(" + ((props.$mouseposition.y - props.$frameonfocus.frame.y - (props.$frameonfocus.frame.height/2))/props.$constraint) + "deg)" + 
            "rotateY(" + ((props.$mouseposition.x - props.$frameonfocus.frame.x - (props.$frameonfocus.frame.width/2))/props.$constraint) + "deg)" 
            : ""
        }
    };  
`

export default function Frame(props) {
    const [frameOnFocus, setFrameOnFocus] = useState(null)
    const frameRef = useRef(null)
    const [mousePosition, setMousePosition ] = useState({x: window.width/2, y: window.height/2})

    const handleMouseMove = (event) => {
      //  Get mouse position relative to element
      const localX = event.clientX ;
      const localY = event.clientY ;
  
      setMousePosition({ x: localX, y: localY });
    };

    useEffect(() => {
        setFrameOnFocus({id: props.id, frame: frameRef.current.getBoundingClientRect()})
    }, [props.mouseposition])

    
    return (
        <FrameWrapper onMouseMove={handleMouseMove}>
            <FrameContainer
                ref={frameRef} 
                $frameonfocus={frameOnFocus}
                $mouseposition={mousePosition}
                $constraint={20}>
                {props.children}
            </FrameContainer>
        </FrameWrapper>
    )
}
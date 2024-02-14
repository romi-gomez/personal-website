import React from "react";
import { useEffect, useState, useRef} from "react";
import styled from "styled-components";

const FrameWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`    
const FramePreview = styled.div.attrs(props => ({
    style: {
        visibility: props.$isframeonhover ? "visible" : "hidden",
        opacity: props.$isframeonhover ? 1 : 0,
    },
    }))`
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0,0,0,0.5);
    padding: 10px;
    color: white;
    transition: all 0.3s ease-in-out;
`
const FrameContainer = styled.div.attrs(props => ({
    style: {
        transform: props.$frameonfocus && props.$mouseposition && props.$isframeonhover ? 
        "rotateX(" + ((props.$mouseposition.y - props.$frameonfocus.frame.y - (props.$frameonfocus.frame.height/2))/props.$constraint) + "deg)" + 
        "rotateY(" + ((props.$mouseposition.x - props.$frameonfocus.frame.x - (props.$frameonfocus.frame.width/2))/props.$constraint) + "deg)" +
        "scale(1.15) translateZ(50px)": "",
        cursor: props.$isframeonhover ? "pointer" : "default",
        background: props.$bgcolor,
        zIndex: props.$isframeonhover ? 10000 : 0,
        boxShadow: props.$isframeonhover ? "0 0 40px 0 rgba(0,0,0,0.5)" : "0px 0px 20px 0px rgba(0,0,0,0.3)"
    },
  }))`
    position: absolute;
    top: 0;
    left: 0;
    width:95%;
    height:95%;
    border-radius: 5px;
    overflow: hidden;  
    transition: all 0.05s ease-in;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `


export default function Frame({id, children, content, setFrameOpened, ...props}) {
    const backgroundImage = require(`../assets/images/gallery/${content.img}`).default
    const [frameOnFocus, setFrameOnFocus] = useState(null)
    const [isFrameOnHover, setIsFrameOnHover] = useState(false)
    const [mousePosition, setMousePosition ] = useState({x: 0, y: 0})
    const frameRef = useRef(null)

    const handleMouseMove = (event) => {
      //  Get mouse position relative to element
      const localX = event.clientX ;
      const localY = event.clientY ;
  
      setMousePosition({ x: localX, y: localY });
    };

    const handleMouseEnter = () => {
        setIsFrameOnHover(true)
    }

    const handleMouseLeave = () => {
        setIsFrameOnHover(false)
    }

    const handleFrameCkicked = () => {
        setFrameOpened(content)
    }

    useEffect(() => {
        setFrameOnFocus({id, frame: frameRef.current.getBoundingClientRect()})
    }, [props.mouseposition])
    
    return (
        <FrameWrapper 
            onMouseMove={handleMouseMove} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleFrameCkicked}> 
            <FrameContainer
                ref={frameRef} 
                $isframeonhover={isFrameOnHover}
                $frameonfocus={frameOnFocus}
                $mouseposition={mousePosition}
                $constraint={20}
                $bgcolor={content.bgcolor}>
                <FramePreview
                    $isframeonhover={isFrameOnHover}>
                    <h2>{content.title}</h2>
                    <h3>{content.tech}</h3>
                    <h4>{content.year}</h4>
                </FramePreview>
                <img src={backgroundImage} alt={content.title}/>    
            </FrameContainer>
        </FrameWrapper>
    )
}
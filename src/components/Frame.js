import React from "react";
import { useEffect, useState, useRef} from "react";
import styled from "styled-components";

const FrameWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
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
        "scale(1.05)" + "translateZ(50px)": "",
        background: props.$bgcolor,
        "z-index": props.$isframeonhover ? 100000000 : -10000000,
    },
  }))`
    position: absolute;
    top: 0;
    left: 0;
    width:95%;
    height:95%;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    border-radius: 5px;
    overflow: hidden;  
    transition: all 0.05s ease-in;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `


export default function Frame({id, children, content, ...props}) {
    const backgroundImage = require(`../images/gallery/${content.img}`).default
    const [frameOnFocus, setFrameOnFocus] = useState(null)
    const [frameOnHover, setFrameOnHover] = useState(null)
    const frameRef = useRef(null)
    const [mousePosition, setMousePosition ] = useState({x: window.width/2, y: window.height/2})

    const handleMouseMove = (event) => {
      //  Get mouse position relative to element
      const localX = event.clientX ;
      const localY = event.clientY ;
  
      setMousePosition({ x: localX, y: localY });
    };

    const handleMouseEnter = () => {
        setFrameOnHover(true)
    }

    const handleMouseLeave = () => {
        setFrameOnHover(false)
    }

    useEffect(() => {
        setFrameOnFocus({id, frame: frameRef.current.getBoundingClientRect()})
        console.log("PROPS.CONTENT", content)
    }, [props.mouseposition])

    
    return (
        <FrameWrapper 
            onMouseMove={handleMouseMove} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}> 
            <FrameContainer
                ref={frameRef} 
                $isframeonhover={frameOnHover}
                $frameonfocus={frameOnFocus}
                $mouseposition={mousePosition}
                $constraint={20}
                $bgcolor={content.bgcolor}
                $bgimg={backgroundImage}>
                <FramePreview
                    $isframeonhover={frameOnHover}>
                    <h2>{content.title}</h2>
                    <h3>{content.tech}</h3>
                    <h4>{content.year}</h4>
                </FramePreview>
                <img src={backgroundImage} alt={content.title}/>    
            </FrameContainer>
        </FrameWrapper>
    )
}
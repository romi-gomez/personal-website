
import { useState, useEffect, useRef } from 'react';

export const useMouseFollowing = (constraint = 20) => {
    const [frameOnFocus, setFrameOnFocus] = useState(null);
    const [isFrameOnHover, setIsFrameOnHover] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const frameRef = useRef(null);

    const handleMouseMove = (event) => {
        const localX = event.clientX;
        const localY = event.clientY;

        setMousePosition({ x: localX, y: localY });
    };

    const handleMouseEnter = () => {
        setIsFrameOnHover(true);
    };

    const handleMouseLeave = () => {
        setIsFrameOnHover(false);
    };

    useEffect(() => {
        if (frameRef.current) {
            setFrameOnFocus({ frame: frameRef.current.getBoundingClientRect() });
        }
    }, [mousePosition]);

    return {
        frameRef,
        frameOnFocus,
        isFrameOnHover,
        mousePosition,
        handleMouseMove,
        handleMouseEnter,
        handleMouseLeave,
    };
};


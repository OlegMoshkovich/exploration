import React, { useState, useEffect } from 'react';

export const useWindowHeight = () => {
    const [height, setHeight] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return height;
}
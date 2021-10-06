import React, { useEffect } from 'react';

interface ChildProps {
    a: number;
    b: number;
}

export function Child({ a, b }: ChildProps) {
    console.log('[render child]');
    const handleResize = () => {
        console.log('a', a);
    };

    useEffect(() => {
        console.log('[useEffect] setup listener');
        window.addEventListener('resize', handleResize);
        return () => {
            console.log('[useEffect] cleanup listener');
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <div style={{ borderStyle: 'solid' }}>
            <h1>{`I'm Child - a:${a} b:${b}`}</h1>
        </div>
    );
}

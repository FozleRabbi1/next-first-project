"use client"

import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            count = {count}
            <div>
                <button onClick={() => setCount(count + 1)} >incresh</button>
                <button onClick={() => setCount(count + 1)} >decrise</button>
            </div>
        </div>
    );
};

export default Counter;
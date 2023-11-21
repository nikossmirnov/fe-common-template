import { useState } from 'react';
import classes from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount((count: number) => count + 1);
    return (
        <div className={classes.main}>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        </div>
    );
    };
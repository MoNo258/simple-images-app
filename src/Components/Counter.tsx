import * as React from "react";
import './Counter.scss';

export type CounterProps = {
    totalCounter: number;
}

const Counter: React.FC<CounterProps> = ({ totalCounter }) => {
    return (
        <div className='counter'>
            <p className='counter__copy'>Total counter:</p>
            <span className='counter__value'>{totalCounter}</span>
        </div>
    );
};

export default Counter;

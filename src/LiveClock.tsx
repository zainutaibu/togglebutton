import {useState, useEffect} from 'react';

const LiveClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect( () => {
            // Start interval to update time every second
            const timer = setInterval( () => {
                setTime(new Date());
            }, 1000);

    }, []); // dependency array

    return (
        <>
            <h2> Live Clock</h2>
            <p>{time.toLocaleTimeString()}</p>
        </>
    );
};
export default LiveClock;
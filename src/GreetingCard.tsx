//  Create a GreetingCard componet that 
// 1. accepts a name prop
// 2. uses useState to toggle a greeting message on button click
import {useState} from 'react';

const GreetingCard = ( {name} ) => {
    
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };
return (   
      <>
        <div className="card">
            <h3> Hello, {name} </h3>
            {showMessage && <p className="message">Wishing you a happy anniversary !</p>}
            <button className="button" onClick={toggleMessage} > 
                { showMessage ? 'Hide Message' : 'Show Message' } 
            </button>
        </div>
        </>
    );
};
export default GreetingCard;
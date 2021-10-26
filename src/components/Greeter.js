import React, { useState } from 'react';

const Greeter = () => {
    const [name, setName] = useState('Enrique')
    const [nation, setNation] = useState('Argentina')

    const handdleClick = () => {
        setName('Hanin')
        setNation('Saudi Arabia')
    }

    return (
        <div>
            <h2>Hello {name} from {nation}</h2>
            <button onClick={handdleClick}>Change the name</button>
        </div>
      );
}

export default Greeter;
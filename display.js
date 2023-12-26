import React, { useState } from 'react';

function Display({props}) {
    const [person, setPerson] = useState(props);
   // const [person, setPerson] = useState(props);

  const handleNameChange = (Name) => {
    setPerson({ ...person, Name });
  };

  const handleAddressChange = (Address) => {
    setPerson({ ...person, Address });
  };

  return (
    <div>
      <input
        type="text"
        //placeholder="Enter name"
        value={person.Name}
        onNameChange={handleNameChange}
        onChange={(e) => setPerson({ ...person, Name: e.target.value })}
      />
      <input
        type="text"
        //placeholder="Enter address"
        value={person.Address}
        onAddressChange={handleAddressChange}
        onChange={(e) => setPerson({ ...person, Address: e.target.value })}
      />      
    </div>
  );
}

export default Display;



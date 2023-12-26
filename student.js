import React from 'react';

function Student({props})
{
    return(
        <div>
            <h4>Name of the Student is :{props.Name}</h4>
            <h4>Address of the Student is :{props.Address}</h4>
            <h4>Scores of the Students is :{props.Scores}</h4>
        </div>
    );
}


export default Student;

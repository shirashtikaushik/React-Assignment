import React from 'react';

class Students extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }
    render() {
      return (
        <div>
        <h4>Name of the Student is :{this.props.Name}</h4>
        <h4>Address of the Student is :{this.props.Address}</h4>
        <h4>Scores of the Students is :{this.props.Scores}</h4>
    </div>
      );
    }
}
   export default Students;
  
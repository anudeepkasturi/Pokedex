import React from 'react';
import Error from './error';

class Errors extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="errors">
        <div className="errors-container">
          {this.props.errors.map((error, idx) => <Error key={idx} error={error} />)}
        </div>
      </div>
    );
  }
}

export default Errors;

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName="error"
        transitionEnterTimeout={8000}
        transitionAppear={true}
        transitionAppearTimeout={5000}
        transitionLeaveTimeout={3000}>
        <div className="error">
          <p>{this.props.error}</p>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Error;

import React from 'react';

import { Prompt } from 'react-router-dom';

class Blocking extends React.Component {
  render() {
    return (
      <div>
        <h1>Blocking a transition!</h1>
<p>{this.props.location.pathname} You can block a transition and have a Navigation prompt with the appropriate message. If you try to go back from this page or navigate to some other page you will see a prompt showing up.</p>
        <Prompt message="Are you want to exit?" />
      </div>
    );
  }
}

export default Blocking;

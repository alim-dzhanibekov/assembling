import * as React from 'react';

interface AboutProps {
}

interface AboutState {
}

class About extends React.Component<AboutProps, AboutState> {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </div>
    );
  }
}

export default About;

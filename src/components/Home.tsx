import * as React from 'react';

interface HomeProps {
}

interface HomeState {
}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>This is the home page.</p>
      </div>
    );
  }
}

export default Home;

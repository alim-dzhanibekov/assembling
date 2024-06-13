import * as React from 'react';

interface ContactProps {
}

interface ContactState {
}

class Contact extends React.Component<ContactProps, ContactState> {
  render() {
    return (
      <div>
        <h1>Contact Page</h1>
        <p>This is the contact page.</p>
      </div>
    );
  }
}

export default Contact;

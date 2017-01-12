import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <img className="footer__image" src={require('../lib/logo.png')}/>
      </div>
    )
  }
}

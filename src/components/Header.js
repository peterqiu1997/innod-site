import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header__title">
          <h1 className="header__title--content">
            Web <a href="" class="typewrite" data-period="2000" data-type='[ "Babies", "Developers", "Designers" ]'>
              <span class="wrap"></span>
            </a>
          </h1>
        </div>
      </div>
    )
  }
}

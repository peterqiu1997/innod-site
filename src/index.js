import React from 'react';
import ReactDOM from 'react-dom';
import Headroom from 'react-headroom';

require('./style/base.scss');

const navbarHeight = 54;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            maxHeight: navbarHeight 
          }}
        >
        <div className="navbar">
          THIS IS THE NAVBAR
        </div>
        </Headroom>
        <div className="content">
          <div className="content__intro">
            Content Intro
          </div>
          <div className="grid">
            <div className="grid-sizer"></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
            <div className="grid-item"><img src="/images/img1.jpg" /></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

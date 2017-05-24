import React from 'react';
import ReactDOM from 'react-dom';
import Headroom from 'react-headroom';
import Masonry from 'react-masonry-component';

require('./style/base.scss');

const navbarHeight = 54;

const divs = [
  <div key={1} className="grid-item"><img src="/images/img2.jpg" /></div>,
  <div key={2} className="grid-item"><img src="/images/img3.jpg" /></div>,
  <div key={3} className="grid-item"><img src="/images/img3.jpg" /></div>,
  <div key={4} className="grid-item"><img src="/images/img1.jpg" /></div>,
  <div key={5} className="grid-item"><img src="/images/img2.jpg" /></div>,
  <div key={6} className="grid-item"><img src="/images/img1.jpg" /></div>,
  <div key={7} className="grid-item"><img src="/images/img1.jpg" /></div>,
  <div key={8} className="grid-item"><img src="/images/img3.jpg" /></div>,
  <div key={9} className="grid-item"><img src="/images/img1.jpg" /></div>,
  <div key={10} className="grid-item"><img src="/images/img2.jpg" /></div>,
  <div key={11} className="grid-item"><img src="/images/img2.jpg" /></div>,
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      divs: divs
    }
  }

  _handleClick(e) {
    console.log("Clicked!");
    let count = this.state.divs.length;
    this.setState({
      divs: this.state.divs.concat([<div key={count++} className="grid-item"><img src="/images/img3.jpg" /></div>])
    });
  }

  render() {
    const options = {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    }

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
          <div className="content__intro" onClick={this._handleClick.bind(this)}>
            Content Intro
          </div>
          <Masonry options={options}>
            <div className="grid-sizer"></div>
            {this.state.divs}
          </Masonry>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

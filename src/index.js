import React from 'react';
import ReactDOM from 'react-dom';
import Headroom from 'react-headroom';
import Masonry from 'react-masonry-component';

require('./style/base.scss');

const navbarHeight = 54;

const divs = [
  <div key={1} className="grid-item"><img src="/images/img2.png" /></div>,
  <div key={2} className="grid-item"><img src="/images/img3.png" /></div>,
  <div key={3} className="grid-item"><img src="/images/img3.png" /></div>,
  <div key={4} className="grid-item"><img src="/images/img1.png" /></div>,
  <div key={5} className="grid-item"><img src="/images/img2.png" /></div>,
  <div key={6} className="grid-item"><img src="/images/img1.png" /></div>,
  <div key={7} className="grid-item"><img src="/images/img1.png" /></div>,
  <div key={8} className="grid-item"><img src="/images/img3.png" /></div>,
  <div key={9} className="grid-item"><img src="/images/img1.png" /></div>,
  <div key={10} className="grid-item"><img src="/images/img2.png" /></div>,
  <div key={11} className="grid-item"><img src="/images/img2.png" /></div>,
]

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      divs: divs,
      hasMore: true,
    }

    this._handleScroll = this._handleScroll.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);
    let count = this.state.divs.length;
    let path = "/images/img3.png";
    this.setState({
      divs: this.state.divs.concat([<div key={count++} className="grid-item"><img src={path} /></div>])
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }

  _handleScroll(e) {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
    var scrolly = window.scrollY
    console.log('offset = ' + offset);
    console.log('height = ' + height);
    console.log("scrolly = " + window.scrollY);
    if (height - offset === scrolly) {
      console.log('At the bottom');
      for (let i = 1; i < 4; i += 1) {
        let count = this.state.divs.length;
        let path = "/images/img" + i + ".png";
        this.setState({
          divs: this.state.divs.concat([<div key={count++} className="grid-item"><img src={path} /></div>])
        });
      }
    }
  }

  _handleClick(e) {
    console.log("Clicked!");
    let count = this.state.divs.length;
    this.setState({
      divs: this.state.divs.concat([<div key={count++} className="grid-item"><img src="/images/img3.png" /></div>])
    });
  }

  render() {
    const options = {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
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
          <Masonry options={options} updateOnEachImageLoad={true}>
            <div className="grid-sizer"></div>
            <div className="grid-item intro">
              <span><b>Innovative Design</b></span> is a family of graphic and web designers, photographers, and videographers at the University of California, Berkeley. 
              <br />
              <br />
              We are creative individuals who are continuously evolving by collaborating, inspiring and educating one another.
            </div>
            {this.state.divs}
          </Masonry>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

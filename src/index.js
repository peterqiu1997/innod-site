import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

require('./style/style.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='content'>
        <Header/>
        <Display/>
        <div className='text'>
          Hi Julia! On behalf of all of your web babies, 
          we wanted to thank you so much for being an amazing tier leader, friend, and web guru extraordinaire.
          <br></br><br></br>
          As Ariel puts it, "WEBMAMA WE LOVE U💖💖💖 u r AMAZING and we appreciate u so much☺️☺️ ty 
          for being awesome💕💕💕🐟🌊."
          <br></br><br></br>
          John would like to add, "you know what the best kind of ship is...friendship. ily web mom 💖💖💖"
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

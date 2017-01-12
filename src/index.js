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
        </div>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

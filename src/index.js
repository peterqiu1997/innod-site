import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/Panel.js';

require('./style/base.scss');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Panel imgName="img1.jpg" />
        <Panel imgName="img2.jpg" />
        <Panel imgName="img3.jpg" />
        <Panel imgName="img1.jpg" />
        <Panel imgName="img2.jpg" />
        <Panel imgName="img3.jpg" />
        <Panel imgName="img1.jpg" />
        <Panel imgName="img2.jpg" />
        <Panel imgName="img3.jpg" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

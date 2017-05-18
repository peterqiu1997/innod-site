import React from 'react';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="panel">
        <img src={"/images/" + this.props.imgName}/>
      </div>
    )
  }
}

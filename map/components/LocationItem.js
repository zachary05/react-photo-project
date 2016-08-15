var React = require("react");
var moment = require('moment');

var LocationItem = React.createClass({
  clickHandler(){
    this.props.Onclik(this.props.address)
  },
  render(){
    var cn = "list-group-item"
    if (active) {
        cn += " active-location";
    }

    return(
      <a className='cn' onClick={this.clickHandler}>
        {this.props.address}
        <span className="createdAt">{moment(this.props.timestamp).fromNow()}</span>
        <span className="glyphicon glyphicon-menu-right"></span>
      </a>
    )
  }
})


module.exports = LocationItem

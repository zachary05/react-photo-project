var React = require("react");

var LocationList = React.createClass({

  render(){
    var _this = this
    var locations = this.props.locations.map(function (x) {
      var active = _this.props.activeLocationAddress == x.address
      return(
        <LocationItem
          address={x.address}
          timestamp={x.timestamp}
          active={active}
          onClick={_this.props.onClick}
          />
      )
    })

    if (!locations.length) {
      return;
    }

    return(
      <div>
        <span className="list-group-item active">Saved Locations</span>
        {locations}
      </div>
    )
  }
})

module.exports = LocationList

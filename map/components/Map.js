var React = require("react");

var Map = React.createClass({
  componentDidMount: function() {
    this.componentDidUpdate();
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (lastLat == this.props.lat && lastLng == this.props.lng) {
        return
    }

    var lastLat = this.props.lat,
        lastLng = this.props.lng;

    var map = New.Gmaps({
      el:'map',
      lat:this.props.lat,
      lng:this.props.lng
    })

    map.addMarker({
    lat: this.props.lat,
    lng: this.props.lng
    });
  },

  render(){
    return(
      <div className="map-holder">
        <p>Loading...</p>
        <div id='map'></div>
      </div>
    )
  }
});

module.exports = Map;

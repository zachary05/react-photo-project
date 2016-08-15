var React = require("react");
var CurrentLocation = require("./CurrentLocation.js");
var LocationList = require("./LocationList.js");
var Map = require("./Map.js");
var Search = require("./Search.js");

var App = React.createClass({
  getInitialState: function() {
    var favorites = [];
    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites)
    }
    return {
      favorites : favorites,
      currentAddress: 'wuhan',
      mapCoordinates: {
        lat: 115.123,
        lng: 35.33
      }
    };
  },
  searchForAddress:function (address) {
    var _this = this;
    GMap.geocode({
      address : address,
      callback: function(results, status) {

      	if (status !== 'OK') return;

      	var latlng = results[0].geometry.location;

      	_this.setState({
      		currentAddress: results[0].formatted_address,
      		mapCoordinates: {
      			lat: latlng.lat(),
      			lng: latlng.lng()
      		}
        });
      }
    })
  },
  toggleFavorite(address){
    if (this.isAddressInFavorites(address)) {
      this.removeFromFavorites(address);
    }else {
      this.addToFavorites(address)
    }
  },

  addToFavorites(address){
    var favorites = this.state.favorites;
    favorites.push({
      address: address,
      timestamp: Date.now()
    })
    this.setState({
      favorites:favorites
    })

    localStorage.favorites = JSON.stringify(favorites)
  },

  removeFromFavorites(address){

    var favorites = this.state.favorites;
    var index = -1;
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].address == address) {
          index = i;
          break;
      }
    }
    if (index !== -1) {
      favorites.splice(index, 1);
      this.setState({favorites:favorites})
      localStorage.favorites = JSON.stringify(favorites)
    }
  },

  isAddressInFavorites(address){
    var favorites = this.state.favorites;

    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i] == address) {
        return true;
      }
    }
    return false;
  },

  render(){
    return (
      <div>
        <Search onSearch={this.searchForAddress}/>
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>
        <CurrentLocation
          address={this.state.currentAddress}
          onFavoriteToggle={this.toggleFavorite}
          favorite={this.isAddressInFavorites(this.props.currentAddress)}/>
        <LocationList
          location={this.state.favorites}
          activeLocationAddress={this.state.currentAddress}
          onClick={this.searchForAddress}
          />
      </div>
    )
  }
})


module.exports = App;

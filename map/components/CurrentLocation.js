var React = require("react");

var CurrentLocation = React.createClass({
  toggleFavorite(){
    this.props.onFavoriteToggle(this.props.address)
  },
  render(){
    var starClassName = "glyphicon glyphicon-star-empty";

		if(this.props.favorite){
			starClassName = "glyphicon glyphicon-star";
		}

    return(
      <div>
        <h4>{this.props.address}</h4>
        <span className={starClassName} onClick={this.toggleFavorite}></span>
      </div>
    )
  }
})

module.exports = CurrentLocation

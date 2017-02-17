var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var location = this.props.location;
//     var temp = this.props.temp;
//
//     return (
//       <h3>It's it {temp} in {location}.</h3>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) =>{

  return (
    <h3>It's it {temp} in {location}.</h3>
  );
}

module.exports = WeatherMessage;

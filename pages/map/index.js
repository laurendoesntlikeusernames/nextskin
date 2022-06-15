import React from "react";

class Map extends React.Component {
  state = {
    defaultCenter: {
      lat: -32.0525256,
      lng: 115.7384503,
    },
  };

  componentDidMount() {
    document.body.classList.add("is-map");
    this.handleAttachGoogleMap();
  }

  componentWillUnmount() { '' }

  handleAttachGoogleMap = () => {
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 13,
    });
  };

  render() {
    return (
 
       <div className="container">
         <div id="google-map" />
       </div>
     
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;
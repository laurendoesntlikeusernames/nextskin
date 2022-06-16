import React from "react";
import Head from 'next/head'

class Map extends React.Component {
  state = {
    defaultCenter: {
      lat: -32.0525256,
      lng: 115.7384503,
    },
    markers: [
        {
          lat: -32.0477028,
          lng: 115.7517936,
        },
        {
          lat: -32.0517913,
          lng: 115.7432879,
        },
        {
          lat: -32.0598003,
          lng: 115.7494265,
        },
        {
          lat: -32.0541437,
          lng: 115.7379749,
        },
        {
          lat: -32.0592819,
          lng: 115.7422008,
        },
      ],
  };

  componentDidMount() {
    this.initMap();

    setTimeout(() => {
        this.handleDrawMarkers();
      }, 2000);
  }

  handleDrawMarkers = () => {

  const { markers } = this.state;
  const bounds = new google.maps.LatLngBounds();

  markers.forEach((marker) => {
    new google.maps.Marker({
      position: marker,
      map: this.map,
    });

    bounds.extend(marker);
  });

  this.map.fitBounds(bounds);
  this.map.panToBounds(bounds);
};

  componentWillUnmount() {  }

  initMap = () => {
    const { defaultCenter } = this.state;
    this.map = new google.maps.Map(document.getElementById("google-map"), {
      center: defaultCenter,
      zoom: 13,
    });
  };

  render() {
    return (

<>
    <Head>
        <title>The Map Page</title>
    </Head>
      <div className="container mx-auto">
         <div id="google-map" />
       </div>
        
</>
    );
  }
}

Map.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Map;
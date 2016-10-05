import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import { View } from 'react-native';

const accessToken = 'pk.eyJ1IjoibWFsaW1pY2hhZWwiLCJhIjoiY2lzd3o0dHdoMDAycjJ5bzNlb2h3bGZpNyJ9.esXPg0T5mPzU0H2dR1g7Iw';
Mapbox.setAccessToken(accessToken);

class Map extends Component {

  state = {
    center: {
      latitude: 51.5074,
      longitude: 0.1278
    },
    zoom: 14
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={map => { this.map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsUserLocation
          styleURL={'mapbox://styles/malimichael/citua2ub3002o2iqgxas59fem'}
          userTrackingMode={Mapbox.userTrackingMode.follow}
          annotations={this.state.annotations}
          annotationsAreImmutable
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
          compassIsHidden
          logoIsHidden
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1
  },
};

export default Map;

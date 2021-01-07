import React from 'react';
import {Image, View, ActivityIndicator} from 'react-native';

const Photo = ({route}) => {
  const [loading, setloading] = React.useState(false);
  const {item} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={{uri: item}}
        style={{flex: 1}}
        onLoadStart={() => setloading(true)}
        onLoadEnd={() => setloading(false)}
      />
      {loading && (
        <ActivityIndicator
          style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
          animating={loading}
        />
      )}
    </View>
  );
};

export default Photo;

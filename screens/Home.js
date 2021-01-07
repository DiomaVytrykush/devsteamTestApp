import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {getPhotos} from '../redux/actions/photos';

function HomeScreen({navigation, photos, getPhotos, loading}) {
  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            backgroundColor: 'white',
          }}>
          {loading ? (
            <View style={{flex: 1, backgroundColor:"white"}}>
              <Text>Loading...</Text>
            </View>
          ) : (
            photos.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Photo', {item: item.urls.full})
                  }>
                  <Image
                    source={{uri: item.urls.full}}
                    style={{width: 'auto', height: 200}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'italic',
                  }}>
                  Name:
                  {item.user.name !== null ? item.user.name : 'No name'}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: 20,
                    fontSize: 16,
                    fontStyle: 'italic',
                  }}>
                  Description:
                  {item.description !== null
                    ? item.description
                    : 'No description'}
                </Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({
  photos: state.photosReducer.photos,
  loading: state.photosReducer.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos: () => dispatch(getPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

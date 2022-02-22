import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import yelp from '../api/yelp';
const NewsDetailScreen = ({route, navigation}) => {
  const [result, setResult] = useState(null);
  const {img, content, source, url} = route.params;
  console.log(img);
  console.log(content);
  console.log(source);

  return (
    <View>
      <Image style={styles.image} source={{uri: img}} />
      <Text style={styles.text} numberOfLines={6}>
        {content}
      </Text>
      <Text style={styles.src}>Source: {source}</Text>
      <TouchableOpacity
        onPress={() => {
          {
            ToastAndroid.show(`${url}`, ToastAndroid.SHORT);
          }
        }}>
        <Text style={styles.btn}>Read Full Article</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 200,
    margin: 10,
  },
  src: {
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 80,
  },
  text: {
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
  },
  btn: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#4151AA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 80,
  },
});
export default NewsDetailScreen;

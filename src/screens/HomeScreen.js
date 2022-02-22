import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import yelp from '../api/yelp';

const HomeScreen = ({navigation}) => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrorMessage] = useState('');

  const apiCall = async () => {
    try {
      const response = await yelp.get('/top-headlines', {
        params: {
          country: 'IN',
        },
      });
      console.log(response.data.articles[1].title);
      setResults(response.data.articles);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <View>
      <FlatList
        data={results}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail Page', {
                  img: item.urlToImage,
                  content: item.content,
                  source: item.source.name,
                  url: item.url,
                })
              }>
              <View>
                <Image style={styles.image} source={{uri: item.urlToImage}} />
                <Text style={{marginBottom: 10}} style={styles.text}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 160,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    marginLeft: 10,
    color: 'black',
  },
});
export default HomeScreen;

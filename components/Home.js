import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View , ScrollView} from 'react-native';
import { TextInput } from "react-native-paper";
import { getAllMovies } from 'movie-app/MovieApi.js'
import Data from './Data.js';


export default function Home({navigation}) {
  const [movies, setMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState(["breaking bad"])

  const fetchApi = async() =>{
    setMovies(await getAllMovies(filterMovies))
    setFilterMovies("")
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {Object.keys(movies).length > 0 && (
            <View>
              <StatusBar barStyle="dark-content" />
              <TextInput placeholder="Search" value={filterMovies} onChangeText={(text) => setFilterMovies(text)} left={<TextInput.Icon name="magnify" />} onSubmitEditing={fetchApi}/>
              <ScrollView>
                {movies.Search.map((movie, i) => (
                  <Data movie={movie} key={i} navigation={navigation} />

                ))}
              </ScrollView>
            </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7EBDC2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

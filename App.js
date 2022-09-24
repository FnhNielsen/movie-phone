import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getMovies } from "./API/MovieApi";
import MovieCard from "./MovieCard.js";


export default function App() {
  const [movies, setMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([""])

  const fetchApi = async() =>{
    setMovies(await getMovies(filterMovies))
    setFilterMovies("")
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {Object.keys(movies).length > 0 && (
        <View>
          <StatusBar barStyle="light-content" />
          <TextInput placeholder="find movie..." value={filterMovies} onChangeText={(text) => setFilterMovies(text)} left={<TextInput.Icon name="magnify" />} onSubmitEditing={fetchApi}/>
          <ScrollView>
            {movies.Search.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { View, Image, Text } from "react-native";

export default function Data({ movie, navigation }) {
  
  return (
    <View >
      <Image
        style={{
          width: '100%',
          height: 250,
          margin: 10,
          borderRadius: 10,
        }}
        resizeMode="cover"
        source={{ uri: movie.Poster }}
      />
      <Text onPress={() => navigation.navigate("Info", {movie,})} style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}>{movie.Title}</Text>
      <Text onPress={() => navigation.navigate("Info", {movie,})} style={{ paddingLeft: 10 }}>{movie.Year}</Text>
      <Text onPress={() => navigation.navigate("Info", {movie,})} style={{ paddingLeft: 10 }}>{movie.Type}</Text>
    </View>
    
  );
}
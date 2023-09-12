import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "../components/Button/button";
import { ListItem } from "../components/ListItem/listItem";
import { fetchNews } from "../Api/index";
import { NavBar } from "../components/NavBar/NavBar";


export function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    fetchNews().then((data) => {

      const newsWithFavorite = data.articles.map((article) => ({
        ...article,
        isFavorite: false,
      }));
      setArticles(newsWithFavorite);
    });
  }, []);  
  

  const handleArticlePress = (article) => {
    navigation.navigate("Article", { article });
  };
  const navigateToCategory = (category) => {
    navigation.navigate("Category", { category });
  };

   
  return (
    <View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <ListItem article={item} onPress={handleArticlePress} />
        )}
      />
      <Button text="Load More" onPress={() => {}} />
      <View>
      <TouchableOpacity style={styles.categoryButtons} >
          <Text style={styles.categoryText}>Sports</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loadMoreButton: {
    marginVertical: 10,
  },
  categoryButtons: {
    backgroundColor: 'red',
    flexDirection: "row",
    gap: 15,
    alignItems: 'center'
    
  },
  
});

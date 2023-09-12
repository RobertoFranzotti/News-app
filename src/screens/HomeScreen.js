import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "../components/Button/button";
import { ListItem } from "../components/ListItem/listItem";
import { fetchNews } from "../Api/index";



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
     <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => navigateToCategory("Technology")}
        >
          <Text style={styles.categoryButtonText}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => navigateToCategory("Sports")}
        >
          <Text style={styles.categoryButtonText}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => navigateToCategory("Finance")}
        >
          <Text style={styles.categoryButtonText}>Finance</Text>
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
    justifyContent: "center",
    alignItems: 'center',
    gap: 15,
    marginTop: 10,
  },
  categoryButton: {
    backgroundColor: "lightblue",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

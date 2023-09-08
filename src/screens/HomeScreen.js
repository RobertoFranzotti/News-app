import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "../components/ListItem/listItem";
import { Button } from "../components/Button/button";
import { fetchNews } from "../Api/index";

export function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews().then((data) => {
      console.log(data);
      setArticles(data.articles);
    });
  }, []);

  const handleArticlePress = (article) => {
    navigation.navigate("Article", { article });
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
    </View>
  );
}

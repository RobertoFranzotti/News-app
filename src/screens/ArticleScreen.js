import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import {React, useState} from "react";
import { FontAwesome } from "@expo/vector-icons";

export function ArticleScreen({ route }) {
  const { article } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  
  console.log(JSON.stringify(article, null, 2));
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const openLink = () => {
    if (article?.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <View>
      <Image style={styles.image} source={{ uri: article?.urlToImage }} />
      <View style={styles.balloonDescription}>
        <Text style={styles.description}>{article?.description}</Text>
      </View>
      <View style={styles.balloon}>
        <Text style={styles.title}>{article?.title}</Text>
        <Text style={styles.author}>Author: {article?.author}</Text>
        <Text style={styles.publishedAt}>
          Published At: {article?.publishedAt}
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.linkContainer} onPress={openLink}>
          <Text style={styles.linkText}>Leia a notícia completa</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          styles.favoriteButton,
          isFavorite ? styles.favoriteButtonActive : {},
        ]}
        onPress={toggleFavorite}
      >
        <FontAwesome
          name={isFavorite ? "heart" : "heart-o"}
          size={24}
          color={isFavorite ? "red" : "blue"}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  balloon: {
    width: 355,
    height: 160,
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 16,
    position: "absolute",
    top: 200,
    left: 30,
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
  },

  balloonDescription: {
    position: "absolute",
    top: 275,
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 24,
  },

  description: {
    textAlign: "justify",
    fontSize: 16,
    marginTop: 80,
    lineHeight: 24,
  },
  linkContainer: {
    backgroundColor: "#007BFF",
    padding: 16,
    borderRadius: 8,
    marginTop: 400,
    alignSelf: "center",
  },

  linkText: {
    color: "#fff",
    fontSize: 16,
  },
  favoriteButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },
  favoriteButtonActive: {
    backgroundColor: '#fff',
  },
});

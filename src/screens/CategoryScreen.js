
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { View, Text,  StyleSheet, FlatList } from 'react-native';
import { getNewsByCategory } from '../Api';
import { ListItem } from '../components/ListItem/listItem';

export function CategoryScreen({ navigation, route }) {
  const [news, setNews] = useState([])
  const { category } = route.params;

  const handleArticlePress = (article) => {
    navigation.navigate("Article", { article });
  };

  useEffect(() => {
    getNewsByCategory(category).then(response => {
      console.log(response.sources[0]);

      setNews(response.sources)
    });
  }, [category])

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem article={item} onPress={handleArticlePress} />
        )}
      />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 16,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
});
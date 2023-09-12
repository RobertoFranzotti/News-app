import { View, Text, FlatList } from 'react-native';
import { ListItem } from '../components/ListItem/listItem';

export function FavoriteScreen({ route }) {
  const { favoriteArticles } = route.params;

  return (
    <View>
      <Text>Favoritos</Text>
      <FlatList
        data={favoriteArticles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <ListItem article={item} onPress={() => {}} />
        )}
      />
    </View>
  );
}
import { View, Text } from 'react-native';

export function ArticleScreen({ route }) {
  const { article } = route.params;

  return (
    <View>
      <Text>Category: {JSON.stringify(article)}</Text>
    </View>
  );
}
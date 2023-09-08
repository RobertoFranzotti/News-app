
import { View, Text } from 'react-native';

export function CategoryScreen({ route }) {
  const { category } = route.params;

  return (
    <View>
      <Text>Category: {category}</Text>
    </View>
  );
}
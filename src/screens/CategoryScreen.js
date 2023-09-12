
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function CategoryScreen({ route }) {
  const { category } = route.params;
  const navigation = useNavigation();

  
  
  return (
    <View style={styles.container}>
      <Text>Category: {category}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 16,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
});
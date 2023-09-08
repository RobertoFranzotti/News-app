
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

export function ListItem({ article, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(article)}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="arrowright" size={24} color="#0080FF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
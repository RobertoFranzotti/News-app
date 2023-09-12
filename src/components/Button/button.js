
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles.button';

export function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient
        colors={['#FF3A44', '#FF8086']}
        end={{ x: 0.1, y: 0.2 }}
        style={styles.buttonGradient}
      >
        <View>
        <Text style={styles.buttonText}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
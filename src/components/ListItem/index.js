import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//FLATLIST
const ListItem = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    
    <TouchableOpacity style={styles.button2}>
      <AntDesign name="minus" size={18} color="white" alignItems="" />
    </TouchableOpacity>
  </View>
);

export default ListItem; 

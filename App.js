import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";

export default function App() {
  const buttonsData = [
    { text: "Healthy", style: styles.buttonText },
    { text: "Technology", style: styles.buttonText1 },
    { text: "Finance", style: styles.buttonText2 },
    { text: "Arts", style: styles.buttonText3 },
  ];

  const renderItem1 = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item} style={styles.carouselImage} />
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.buttonTextContainer}>
      <LinearGradient
        colors={["#FF3A44", "#FF8086"]}
        end={{ x: 0.1, y: 0.2 }}
        style={item.style}
      >
        <Text style={styles.buttonText}>{item.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const imagens = [
    require("./assets/finance-sicoob.png"),
    require("./assets/healthy.png"),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua busca"
          keyboardType="numeric"
          placeholderTextColor={"#818181"}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <LinearGradient
              colors={["#FF3A44", "#FF8086"]}
              end={{ x: 0.1, y: 0.2 }}
              style={styles.button}
            >
              <Feather name="bell" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.titulo}>
        {/* list header components titulo da flatlist */}
        <Text style={styles.title}>Latest News</Text>

        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: "#0080FF" }}>See All </Text>
          <AntDesign name="arrowright" size={24} color="#0080FF" />
        </TouchableOpacity>
      </View>

      <Carousel
        data={imagens}
        renderItem={renderItem1}
        sliderWidth={450}
        sliderHeight={300}
        itemWidth={300}
        loop={true}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={10000}
      />

      <View style={styles.titulo2}>
        <FlatList
          data={buttonsData}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.text}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingVertical: 16,
  },

  header: {
    marginTop: 30,
    width: "100%",
    //gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#F0F1FA",
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 99999,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    
  },

  titulo: {
    marginTop: 24,
    width: "100%",
    //gap: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontWeight: "700",
    fontSize: 22,
  },

  button2: {
    alignItems: "center",
    //justifyContent: "center",
    //width: "100%",
    //gap: 16,
    flexDirection: "row",
    //paddingRight: 25,
  },

  titulo2: {
    flex: 1,
     
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonTextContainer: {
    marginHorizontal: 15,
    marginTop: 0,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    width: 75,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText1: {
    color: "#FFFFFF",
    fontSize: 14,
    width: 75,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText2: {
    color: "#FFFFFF",
    fontSize: 14,
    width: 75,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText3: {
    color: "#FFFFFF",
    fontSize: 14,

    width: 75,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselItem: {
    width: 300,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },

  carouselImage: {
    width: "100%",
    height: "100%",
  },
});

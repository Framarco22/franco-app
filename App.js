/* import { StatusBar } from "expo-status-bar"; */
/* import Usuario from "./src/components/Usuario"; */
import cartLogo from "./assets/cart.jpg"; 
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import RemoveModal from "./src/components/removeModal";

const DATA = [
  {
    name: "remera",
    id: 1,
  },
  {
    name: "Pantalon",
    id: 2,
  },
  {
    name: "Gorra",
    id: 3,
  },
  {
    name: "Medias",
    id: 4,
  },
  {
    name: "Buzo",
    id: 5,
  },
  {
    name: "Valija",
    id: 6,
  },
  {
    name: "Zapatos",
    id: 7,
  },
  {
    name: "Cartea",
    id: 8,
  },
  {
    name: "Mochila",
    id: 9,
  },
  {
    name: "Aritos",
    id: 10,
  },
  
];

export default function App() {
  // useState y useEffect hooks para controlar el estado de la aplicacion y el ciclo de vida del componente.
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleAddCounter = () => setCounter(counter + 1);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
    console.log(id);
  };
/*    console.log({counter}); */




const addItem = () => {
  const newItem = {
    name: inputValue,
    id: new Date().getTime(),
  };
  setCartItems([...cartItems, newItem]);
};

return (
  <View style={styles.container}>
    {/* El StatusBar controla la barra de estado del dispositivo */}
    <StatusBar style="auto" />

    {/* Llamamos al modal para eliminar el producto y le pasamos por props toda la data que necesita */}
    <RemoveModal
      modalVisible={modalVisible}
      cartItems={cartItems}
      setCartItems={setCartItems}
      setModalVisible={setModalVisible}
      itemSelected={itemSelected}
    />
    <View style={styles.header}>
      <Text>CARRITO</Text>
      {/* <Image style={{width: 50, height: 50}} source={{uri: "https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg"}}/> */}

      <Image style={styles.image} source={cartLogo} />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholder="Ingrese un producto"
      />
      <Pressable onPress={addItem}>
        <Text style={{ fontSize: 40 }}>+</Text>
      </Pressable>
    </View>
    <View style={styles.productList}>
        {/* {DATA.map((item) => (
          <View key={item.id}>
            <Text style={styles.products}>{item.name} </Text>
          </View>
        ))} */}

        <FlatList
        data={cartItems}
        renderItem ={({item}) => (
          <View style= {{width:'400'}}>
            <Text style={styles.products}>{item.name} </Text>
            <Pressable onPress={() => handleModal(item.id)}>
                <Text style={{ fontSize: 20 }}>🚮</Text>
              </Pressable>
          </View>
        )}
          keyExtractor= {item => item.id}
        />
      </View>

{/*       <Text>Valor del input: {inputValue} </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  modalContainer: {
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: 45,
    height: 45,
  },

    productsList: {
    justifyContent: "center",
    alignItems: "center",

  },

  products: {
    fontSize: 15,
    padding: 4,
    fontWeight: "bold",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: "80%",
  },
  inputContainer: { flexDirection: "row" },
})


{
  /*         <Text style={styles.products}>Remera</Text>
        <Text style={styles.products}>Remera</Text>
        <Text style={styles.products}>Remera</Text>
        <Text style={styles.products}>Gorra</Text>
        <Text style={styles.products}>Pantalon</Text>
        <Text style={styles.products}>Remera</Text>
        <Text style={styles.products}>Gorra</Text>
        <Text style={styles.products}>Pantalon</Text> */
}

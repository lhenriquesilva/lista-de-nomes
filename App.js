import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  Image,
  StyleSheet
} from "react-native";

export default function App() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (texto.trim() === "") return;

    const novoItem = {
      id: Math.random().toString(),
      nome: texto
    };

    setLista([...lista, novoItem]);
    setTexto("");
  }

  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneENWRiA8g2nCIT5Xi1XdGbJfXJZcBN3UMw&s" }}
        style={styles.imagem}
      />

      
      <Text style={styles.titulo}>Digite seu nome</Text>

      
      <TextInput
        style={styles.input}
        placeholder="EX: cleiton rasta"
        value={texto}
        onChangeText={setTexto}
      />

      
      <Pressable style={styles.botao} onPress={adicionarItem}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </Pressable>

      
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.textoItem}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  imagem: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  botao: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold"
  },
  item: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  textoItem: {
    fontSize: 16
  }
});
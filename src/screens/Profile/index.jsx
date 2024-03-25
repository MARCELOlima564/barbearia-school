import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { Image } from "react-native-web";
import { ScrollView } from "react-native-gesture-handler";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <ScrollView>
    <View style={styles.container}>
      <Title title="Perfil do Desenvolvedor" />
      <Image style={styles.image} source={require("../../../assets/minhaimagem.jpg")}/>
      <View style={styles.user}>
        <Title title="Dados do Desenvolvedor" />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
        <Text style={styles.text}>{data.dev}</Text>
        <Text style={styles.text}>{data.address.city}</Text>
        <Text style={styles.text}>{data.address.state}</Text>
      </View>

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Category" title="Go to Category" />
    </View>
    </ScrollView>
  );
}

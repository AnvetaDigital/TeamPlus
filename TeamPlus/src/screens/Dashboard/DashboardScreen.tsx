import { Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { RootStackParamList } from "../../../App";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DaRootStackParamListshboardScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TeamPlus</Text>
      <Text style={styles.subtitle}>Daily team status made simple</Text>

      <Pressable onPress={() => navigation.navigate("AddStatus")}>
        <Text>Add Status</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("StatusList")}>
        <Text>View Team Status</Text>
      </Pressable>
    </View>
  );
}

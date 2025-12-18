import { Pressable, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Dashboard">;

export default function DashboardScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TeamPlus</Text>

      <Pressable onPress={() => navigation.navigate("AddStatus")}>
        <Text>Add Status</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("StatusList")}>
        <Text>View Team Status</Text>
      </Pressable>
    </View>
  );
}

import { FlatList, Pressable, Text, View } from "react-native";
import { useStatus } from "../../context/StatusContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type NavProp = NativeStackNavigationProp<
  RootStackParamList,
  "StatusList"
>;
export default function StatusListScreen() {
  const { statuses } = useStatus();
  const navigation = useNavigation<
  NativeStackNavigationProp<RootStackParamList>
>();

  if (statuses.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No status updates yet</Text>
        <Pressable onPress={()=>navigation.navigate("AddStatus")}>
          <Text>Add one now</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={statuses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
        onPress={()=>
          navigation.navigate("StatusDetail", {id: item.id})
        }
        style={{padding: 16, borderBottomWidth: 1}}
        >
          <Text>{item.date}</Text>
          <Text numberOfLines={1}>{item.today}</Text>
        </Pressable>
      )}
    ></FlatList>
  );
}

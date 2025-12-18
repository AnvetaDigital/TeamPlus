import { FlatList, Text, View } from "react-native";
import { useStatus } from "../../context/StatusContext";

export default function StatusListScreen() {
  const { statuses } = useStatus();

  if (statuses.length === 0) {
    return (
      <View style={{ padding: 20 }}>
        <Text>No status updates yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={statuses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.date}</Text>
          <Text numberOfLines={1}>{item.today}</Text>
        </View>
      )}
    ></FlatList>
  );
}

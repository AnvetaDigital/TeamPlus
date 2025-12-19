import { View, Text, Pressable, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useStatus } from "../../context/StatusContext";
import { RootStackParamList } from "../../../App";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "StatusDetail">;

export default function StatusDetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const { statuses } = useStatus();

  const status = statuses.find((s) => s.id === id);
  const { deleteStatus } = useStatus();

  if(!status){
    return(
      <View style={{ padding: 20 }}>
        <Text>Status not found</Text>
        <Pressable onPress={() => navigation.replace("StatusList")}>
          <Text style={{ color: "blue", marginTop: 10 }}>Go Back</Text>
        </Pressable>
      </View>
    )
  }

  const handleDelete = () => {
    Alert.alert("Delete Status", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          deleteStatus(id);
          navigation.replace("StatusList");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.date}>📅 {status.date}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Yesterday</Text>
          <Text style={styles.value}>{status.yesterday}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Today</Text>
          <Text style={styles.value}>{status.today}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Blockers</Text>
          <Text style={styles.value}>{status.blockers || "No blockers"}</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable
          style={styles.editButton}
          onPress={() => navigation.navigate("EditStatus", { id })}
        >
          <Text style={styles.editText}>Edit</Text>
        </Pressable>

        <Pressable style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

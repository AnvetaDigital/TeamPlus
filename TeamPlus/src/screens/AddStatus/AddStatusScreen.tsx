import { View, TextInput, Pressable, Text } from "react-native";
import { useState } from "react";
import { useStatus } from "../../context/StatusContext";
import { Status } from "../../types/status";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "AddStatus">;

export default function AddStatusScreen({navigation}: Props) {
  const { addStatus } = useStatus();

  const [yesterday, setYesterday] = useState("");
  const [today, setToday] = useState("");
  const [blockers, setBlockers] = useState("");

  const handleSubmit = () => {
    if (!yesterday || !today) return;

    const newStatus: Status = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      yesterday,
      today,
      blockers,
      createdAt: Date.now(),
    };

    addStatus(newStatus);
    navigation.replace("StatusList");
  };

  return (
    <View style={styles.container}>
      <Text>Yesterday</Text>
      <TextInput style={styles.input} value={yesterday} onChangeText={setYesterday} />

      <Text>Today</Text>
      <TextInput style={styles.input} value={today} onChangeText={setToday} />

      <Text>Blockers</Text>
      <TextInput style={styles.input} value={blockers} onChangeText={setBlockers} />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

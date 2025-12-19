import { View, Alert } from "react-native";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useStatus } from "../../context/StatusContext";
import { Status } from "../../types/status";
import { styles } from "./styles";
import { RootStackParamList } from "../../../App";
import FormInput from "../../components/FormInput";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

type AddProps = NativeStackScreenProps<RootStackParamList, "AddStatus">;

type EditProps = NativeStackScreenProps<RootStackParamList, "EditStatus">;

type Props = AddProps | EditProps;

export default function AddStatusScreen({ route, navigation }: Props) {
  const { statuses, addStatus, updateStatus } = useStatus();

  const isEdit = route.name === "EditStatus";

  let statusId: string | undefined;

  if (isEdit) {
    statusId = route.params.id;
  }

  const existingStatus = isEdit
    ? statuses.find((s) => s.id === statusId)
    : null;

  const [yesterday, setYesterday] = useState("");
  const [today, setToday] = useState("");
  const [blockers, setBlockers] = useState("");

  const isValid = yesterday.trim().length > 0 && today.trim().length > 0;
  // Prefill fields in edit mode
  useEffect(() => {
    if (isEdit && existingStatus) {
      setYesterday(existingStatus.yesterday);
      setToday(existingStatus.today);
      setBlockers(existingStatus.blockers ?? "");
    }
  }, [isEdit, existingStatus]);

  const handleSubmit = () => {
    if (!yesterday.trim() || !today.trim()) return;

    if (isEdit && existingStatus) {
      const updatedStatus: Status = {
        ...existingStatus,
        yesterday,
        today,
        blockers,
      };

      updateStatus(updatedStatus);
      Alert.alert("Updated", "Status updated successfully", [
        {
          text: "OK",
          onPress: () =>
            navigation.replace("StatusDetail", { id: updatedStatus.id }),
        },
      ]);
      navigation.replace("StatusDetail", { id: existingStatus.id });
      return;
    }

    const newStatus: Status = {
      id: Date.now().toString(),
      date: new Date().toISOString().split("T")[0],
      yesterday,
      today,
      blockers,
      createdAt: Date.now(),
    };

    addStatus(newStatus);
    Alert.alert("Saved", "Status added successfully", [
      { text: "OK", onPress: () => navigation.replace("StatusList") },
    ]);
    navigation.replace("StatusList");
  };

  return (
    <View style={styles.container}>
      <FormInput
        label="Yesterday"
        value={yesterday}
        onChangeText={setYesterday}
        multiline
      />
      <FormInput
        label="Today"
        value={today}
        onChangeText={setToday}
        multiline
      />
      <FormInput
        label="Blockers"
        value={blockers}
        onChangeText={setBlockers}
        multiline
      />

      <PrimaryButton
        title={isEdit ? "Update Status" : "Add Status"}
        onPress={handleSubmit}
        disabled={!isValid}
      />
    </View>
  );
}

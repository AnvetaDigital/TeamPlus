import { Pressable, Text, View } from "react-native";
import { Status } from "../types/status";

type Props = {
  status: Status;
  onPress: () => void;
};

export default function StatusCard({ status, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
      }}
    >
      <Text style={{ fontWeight: "600", color: "#111827" }}>{status.date}</Text>
      <Text numberOfLines={1} style={{ color: "#374151", marginTop: 4 }}>
        {status.today}
      </Text>
    </Pressable>
  );
}

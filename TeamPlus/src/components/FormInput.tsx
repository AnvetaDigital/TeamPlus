import { View, Text, TextInput } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
};

export default function FormInput({
  label,
  value,
  onChangeText,
  multiline = false,
}: Props) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 13, color: "#374151", marginBottom: 6 }}>
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        style={{
          borderWidth: 1,
          borderColor: "#E5E7EB",
          borderRadius: 6,
          padding: 10,
          backgroundColor: "#fff",
          minHeight: multiline ? 80 : 44,
          textAlignVertical: multiline ? "top" : "center",
        }}
      />
    </View>
  );
}

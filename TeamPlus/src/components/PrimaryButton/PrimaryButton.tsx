import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        padding: 14,
        backgroundColor: disabled ? "#aaa" : "#2563eb",
        borderRadius: 6,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "600" }}>
        {title}
      </Text>
    </Pressable>
  );
}

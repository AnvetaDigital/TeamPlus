import { View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export default function DashboardScreen({ navigation }: any) {
  return (
    <LinearGradient
      colors={["#0F2027", "#203A43", "#2C5364"]}
      style={styles.container}
    >
      <Text style={styles.title}>TeamPlus</Text>
      <Text style={styles.subtitle}>Daily Team Updates</Text>

      <Pressable
        style={[styles.card, styles.primaryCard]}
        onPress={() => navigation.navigate("AddStatus")}
      >
        <Text style={styles.cardTitle}>➕ Add Status</Text>
        <Text style={styles.cardDesc}>
          Share yesterday, today & blockers
        </Text>
      </Pressable>

      <Pressable
        style={[styles.card, styles.secondaryCard]}
        onPress={() => navigation.navigate("StatusList")}
      >
        <Text style={styles.cardTitle}>📋 View Team Status</Text>
        <Text style={styles.cardDesc}>
          Check all submitted updates
        </Text>
      </Pressable>
    </LinearGradient>
  );
}

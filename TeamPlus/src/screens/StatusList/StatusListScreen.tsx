import { FlatList, Pressable, Text, View } from "react-native";
import { useStatus } from "../../context/StatusContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { styles } from "./styles";
import { useState } from "react";
import { RefreshControl } from "react-native";

export default function StatusListScreen() {
  const { statuses, reloadStatuses } = useStatus();
  const [refreshing, setRefreshing] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onRefresh = async () => {
    setRefreshing(true);
    await reloadStatuses();
    setTimeout(() => setRefreshing(false), 600);
  };

  if (statuses.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>📭</Text>
        <Text style={styles.emptyTitle}>No status updates yet</Text>
        <Text style={styles.emptyText}>
          Your team hasn't shared any updates yet.
        </Text>
        <Pressable
          style={styles.emptyButton}
          onPress={() => navigation.navigate("AddStatus")}
        >
          <Text style={styles.emptyButtonText}>Add First Status</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={statuses}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={()=>navigation.navigate("StatusDetail", { id: item.id })}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.date}>📅 {item.date}</Text>
              <Text style={styles.arrow}>›</Text>
            </View>

            <Text style={styles.preview} numberOfLines={2}>
              {item.today}
            </Text>
          </Pressable>
        )}
      />

      <Pressable
        style={styles.fab}
        onPress={() => navigation.navigate("AddStatus")}
      >
        <Text style={styles.fabIcon}>＋</Text>
      </Pressable>
    </View>
  );
}

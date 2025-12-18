import { View, Text } from "react-native";
import { RootStackParamList } from "../../../App";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useStatus } from "../../context/StatusContext";

type RouterProps = RouteProp<RootStackParamList, "StatusDetail">;
export default function StatusDetailScreen() {
  const {params} = useRoute<RouterProps>();
  const {statuses} = useStatus();

  const status = statuses.find((s)=>s.id===params.id);

  if(!status){
    return(
      <View style={{padding: 24}}>
        <Text>Status not found</Text>
      </View>
    )
  }

  return (
    <View style={{ padding: 24 }}>
      <Text>Date: {status.date}</Text>
      <Text>Yesterday: {status.yesterday}</Text>
      <Text>Today: {status.today}</Text>
      <Text>Blockers: {status.blockers}</Text>
    </View>
  );
}

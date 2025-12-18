import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./src/screens/Dashboard/DashboardScreen";
import StatusListScreen from "./src/screens/StatusList/StatusListScreen";
import StatusDetailScreen from "./src/screens/StatusDetail/StatusDetailScreen";
import AddStatusScreen from "./src/screens/AddStatus/AddStatusScreen";
import { StatusProvider } from "./src/context/StatusContext";

export type RootStackParamList = {
  Dashboard: undefined;
  AddStatus: undefined;
  StatusList: undefined;
  StatusDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <StatusProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="AddStatus" component={AddStatusScreen} />
          <Stack.Screen name="StatusList" component={StatusListScreen} />
          <Stack.Screen name="StatusDetail" component={StatusDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StatusProvider>
  );
}


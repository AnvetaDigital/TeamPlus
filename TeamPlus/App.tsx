import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DashboardScreen from './src/screens/Dashboard/DashboardScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DashboardScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7be6ddff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

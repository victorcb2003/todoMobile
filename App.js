import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Todo from './components/Todo';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}} edges={["top", "bottom"]}>
    <View style={styles.container}>
        <Todo/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%"
  },
});

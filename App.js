import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import awsconfig from "./src/aws-exports";
import Navigator from "./src/navigation";


Amplify.configure(awsconfig);

function App () {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigator />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withAuthenticator(App)
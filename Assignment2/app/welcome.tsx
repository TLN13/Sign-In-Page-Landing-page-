import { View, StyleSheet, Text } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to My New App</Text>
      <Text style={styles.subText}>Explore the cities below!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 30,
    fontFamily:'Times new roman',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',
  },
});
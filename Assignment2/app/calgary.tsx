import { View, Text, StyleSheet } from "react-native"; 
import CityScreen from "../components/cityScreen";
const CalgaryScreen = () => (
    <CityScreen 
      imageSource={require('../assets/calgary.jpg')} 
      cityUrl="https://www.calgary.ca/home.html" 
    />
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    }
});
export default CalgaryScreen;
import { View, Text, StyleSheet } from "react-native"; 
import CityScreen from "../components/cityScreen";

const EdmontonScreen = () => (
    <CityScreen 
      imageSource={require('../assets/edmonton.jpg')} 
      cityUrl="https://www.edmonton.ca/" 
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
export default EdmontonScreen;
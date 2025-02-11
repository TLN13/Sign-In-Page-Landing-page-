import { View, Text, StyleSheet } from "react-native"; 

const CalgaryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Calgary!</Text>
        </View>
    );
};

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
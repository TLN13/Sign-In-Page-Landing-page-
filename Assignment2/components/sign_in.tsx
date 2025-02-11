import { View, Text, TextInput, StyleSheet} from "react-native";

const Sign_in = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput placeholder="Username" style={styles.input}></TextInput>
            <TextInput placeholder="Password" style={styles.input}></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    title:{
        fontSize: 25, 
        fontWeight: "bold"
    },
    input: {
        width: 200,
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 5,
      },
})

export default Sign_in;

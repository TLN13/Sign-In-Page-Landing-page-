import { View, Text, TextInput, StyleSheet, Button} from "react-native";
import { useState } from "react";
import credentials from "../credentials.json";
const Sign_in = () => {
    const handleSignIn = () => {alert ("Sign In pressed")}
    const [Username,setUserName] = useState<string>("");
    const [Password,setPassword] = useState<string>("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput placeholder="Username" style={styles.input} onChangeText={setUserName} value={Username}/>
            <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} value={Password}/>
            <Button title = "Sign In" onPress = {handleSignIn}/>
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
    button: {

    },
})

export default Sign_in;

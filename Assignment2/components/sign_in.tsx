import { View, Text, TextInput, StyleSheet, Button, Alert} from "react-native";
import { useState } from "react";
import credentials from "../credentials.json";

type Sign_inProps = { setIsSignedIn: ( isSignedIn: boolean) => void };

const Sign_in: React.FC<Sign_inProps> = ({setIsSignedIn}) => {
    const [Username,setUserName] = useState<string>("");
    const [Password,setPassword] = useState<string>("");
    const handleSignIn = () => {
        const user= credentials.users.find((user) => user.username === Username && user.password === Password );

        if(!user) {
            alert("Invalid Username or Password")
        } else {
            setIsSignedIn(true) 
        }
    };
    const validateCredentials = () =>{
        const user= credentials.users.find((user) => user.username === Username && user.password === Password );
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (Username.length < 5) {
            Alert.alert('Error', 'Username must be at least 5 characters long.');
            return;
          }
        if (!passwordRegex.test(Password)) {
            Alert.alert('Error', 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.');
            return;
          }
        if(!user) {
            alert("Invalid Username or Password")
        } else {
            setIsSignedIn(true) 
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput placeholder="Username" style={styles.input} onChangeText={setUserName} value={Username}/>
            <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} value={Password} secureTextEntry={true}/>
            <Button title = "Sign In" onPress = {validateCredentials}/>
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

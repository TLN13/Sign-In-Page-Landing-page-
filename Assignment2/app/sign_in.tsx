import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useState } from 'react';
import credentials from '../credentials.json';

type SignInProps = {
  setIsSignedIn: (isSignedIn: boolean) => void;
};

const SignIn: React.FC<SignInProps> = ({ setIsSignedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateCredentials = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username.length < 5) {
      Alert.alert('Error', 'Username must be at least 5 characters long.');
      return;
    }

    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Error',
        'Password must be at least 8 characters, include uppercase, lowercase, number, and special character.'
      );
      return;
    }

    const user = credentials.users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      Alert.alert('Error', 'Invalid Username or Password');
    } else {
      setIsSignedIn(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Sign In" onPress={validateCredentials} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default SignIn;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Image } from 'react-native';

const App = () => {
  const handleClick = () => {
    alert("merhaba");
  };

  return (
    <View style={styles.container}>
      <Button title="click" onPress={() => alert("merhaba")} />
      <TouchableOpacity onPress={() => alert("merhaba")}>
        <Text>
          Click TouchableOpacity
        </Text>
      </TouchableOpacity>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="red"
        onPress={() => alert("pressed")}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => alert("merhaba")}>
        <Text>TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>

      <Image
        style={{
          width: "100%",
          height: 100,
          borderWidth: 2,
          borderColor: "red",
        }}
        source={{
          uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FAksaraydugunfotografcisifotocs%2F&psig=AOvVaw1yiMOF6fQ0YyHdOWbfrP1-&ust=1703939798362000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjR9cjUtIMDFQAAAAAdAAAAABAE"
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

import {Text, View} from "react-native";

const Greet = ({name}) => {
  return (
    <View>
      <Text>Hi {name}</Text>
    </View>
  );
};

export default Greet;
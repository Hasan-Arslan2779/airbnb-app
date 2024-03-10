import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
const CostumMarker = ({ appartment, onPress }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: appartment.latitude,
        longitude: appartment.longitude,
      }}
      title={appartment.title}
      description={appartment.description}
    >
      <View style={styles.mar}>
        <Text style={styles.text}> $ {appartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CostumMarker;

const styles = StyleSheet.create({
  mar: {
    backgroundColor: "white",
    padding: 3,
    borderWidth: 3,
    borderColor: "gray",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: "bold",
  },
});

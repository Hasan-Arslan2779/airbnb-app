import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import React from "react";
import apartments from "@/constants/data.json";
type AppartmentListItems = {
  appartment: (typeof apartments)[0];
  containerStyle?: ViewStyle;
};

const AppartmentListItems = ({
  appartment,
  containerStyle,
}: AppartmentListItems) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: appartment.image }} style={styles.img} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{appartment.title}</Text>
        <Text style={styles.description}>
          Stay at this appartment for an affordable price.
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>$ {appartment.price} night</Text>
          <Text style={styles.price}>
            ★ {appartment.rating} ({appartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
  },
  img: {
    width: 130,
    aspectRatio: 1,
    borderRadius: 10,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginTop: 30,
  },
  description: {
    fontSize: 10,
    color: "gray",
    fontWeight: "bold",
    marginTop: 10,
  },
  price: {
    fontWeight: "700",

    flex: 1,
  },
});

export default AppartmentListItems;

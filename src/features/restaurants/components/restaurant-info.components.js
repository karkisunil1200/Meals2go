import React from "react";
import { View, Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurnt",
    icon,
    photos = ["https://images.alphacoders.com/846/84631.jpg"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <View>
      <Text>Restaurant Info</Text>
    </View>
  );
};

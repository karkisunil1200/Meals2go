import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.card";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <>
      <SafeArea>
        {isLoading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animatiing={true}
              color={Colors.blue300}
            />
          </View>
        )}
        <SearchContainer>
          <Searchbar placeholder="search.." />
        </SearchContainer>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      </SafeArea>
    </>
  );
};

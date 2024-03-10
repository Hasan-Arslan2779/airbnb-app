import { View, Text, StyleSheet, StatusBar, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useCallback, useState, useMemo, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";
// Data
import apperments from "../constants/data.json";
import CostumMarker from "../components/CostumMarker";
import AppartmentListItems from "../components/AppartmentListItems";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

export default function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <GestureHandlerRootView>
      <View>
        <Stack.Screen options={{ headerShown: false }} />
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          // initialRegion={mapRegion}
          region={mapRegion}
        >
          {apperments.map((appartment, index) => {
            return (
              <CostumMarker
                key={index}
                appartment={appartment}
                onPress={() => setSelectedApartment(appartment)}
              />
            );
          })}
        </MapView>
        {/* Display Selected Apartment */}
        {selectedApartment && (
          <AppartmentListItems
            appartment={selectedApartment}
            containerStyle={{
              position: "absolute",
              bottom: typeof snapPoints === "number" ? snapPoints + 10 : 100,
              left: 8,
              right: 8,
            }}
          />
        )}
        {/* Bottom Sheet */}
        <BottomSheet
          enablePanDownToClose
          index={0}
          snapPoints={[80, "50%", "98%"]}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 16,
                marginBottom: 30,
                marginVertical: 5,
              }}
            >
              Over {apperments.length} places
            </Text>

            <BottomSheetFlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
              data={apperments}
              renderItem={({ item }) => (
                <AppartmentListItems appartment={item} />
              )}
            />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

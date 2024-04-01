import { View, Text, StyleSheet } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");

  const items = useMemo(() => listingsData as any, []);

  const onCategoryDataChange = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => (
            <ExploreHeader onCategoryChange={onCategoryDataChange} />
          ),
        }}
      />
      <Listings category={category} listings={items} />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 135,
  },
});

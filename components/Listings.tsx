import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

interface ListingsProps {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: ListingsProps) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity
            style={{ position: "absolute", right: 30, top: 30 }}
          >
            <Ionicons name="heart-outline" color={"#fff"} size={24} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontFamily: "Font" }}>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="star" />
              <Text style={{ fontFamily: "FontLight", color: Colors.grey }}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>
          <Text style={{ fontFamily: "FontLight", color: Colors.grey }}>
            {item.smart_location}
          </Text>
          <Text
            style={{
              fontFamily: "FontLight",
              color: Colors.grey,
              marginBottom: 5,
            }}
          >
            {item.room_type}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontFamily: "Font" }}>$ {item.price}</Text>
            <Text style={{ fontFamily: "FontLight", color: Colors.grey }}>
              {" "}
              night
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        data={loading ? [] : items}
        ref={listRef}
        renderItem={renderRow}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  listing: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

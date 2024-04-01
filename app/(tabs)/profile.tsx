import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      {isSignedIn ? (
        <Button title="Sign out" onPress={() => signOut()} />
      ) : (
        <Link href={"/(modals)/login"}>
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default Page;

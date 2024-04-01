import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

enum Strategy {
  GOOGLE = "oauth_google",
  APPLE = "oauth_apple",
  FACEBOOK = "oauth_facebook",
}

const Page = () => {
  useWarmUpBrowser();

  const router = useRouter();

  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.GOOGLE]: googleAuth,
      [Strategy.APPLE]: appleAuth,
      [Strategy.FACEBOOK]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField, { marginBottom: 15 }]}
      />
      <Text style={defaultStyles.hint}>
        We'll send you an email to confirm your account. Standard message and
        data rates may apply
      </Text>
      <TouchableOpacity style={[defaultStyles.button, { marginTop: 25 }]}>
        <Text style={defaultStyles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorView}>
        <View style={styles.lines}></View>
        <Text style={styles.separator}>or</Text>
        <View style={styles.lines}></View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[defaultStyles.outlineButton]}>
          <Ionicons
            style={defaultStyles.buttonIcon}
            name="phone-portrait-outline"
            size={24}
            color={"#000"}
          />
          <Text style={defaultStyles.OutlineButtonText}>
            Continue with Phone
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[defaultStyles.outlineButton]}
          onPress={() => onSelectAuth(Strategy.GOOGLE)}
        >
          <Ionicons
            style={defaultStyles.buttonIcon}
            name="logo-google"
            size={24}
            color={"#000"}
          />
          <Text style={defaultStyles.OutlineButtonText}>
            Continue with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[defaultStyles.outlineButton]}
          onPress={() => onSelectAuth(Strategy.APPLE)}
        >
          <Ionicons
            style={defaultStyles.buttonIcon}
            name="logo-apple"
            size={24}
            color={"#000"}
          />
          <Text style={defaultStyles.OutlineButtonText}>
            Continue with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[defaultStyles.outlineButton]}
          onPress={() => onSelectAuth(Strategy.FACEBOOK)}
        >
          <Ionicons
            style={defaultStyles.buttonIcon}
            name="logo-facebook"
            size={24}
            color={"#000"}
          />
          <Text style={defaultStyles.OutlineButtonText}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  lines: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    justifyContent: "center",
  },
  separator: {
    fontFamily: "Font",
    marginBottom: 5,
  },
  buttonContainer: {
    gap: 15,
  },
});

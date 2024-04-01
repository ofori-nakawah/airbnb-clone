import { StyleSheet } from "react-native";
import Colors from "./Colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfffff",
  },
  inputField: {
    height: 52,
    borderWidth: 1,
    borderColor: "#ababab",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  button: {
    backgroundColor: Colors.primary,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "FontBold",
  },
  buttonIcon: {
    position: "absolute",
    left: 16,
  },
  footer: {
    position: "absolute",
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  hint: {
    fontFamily: "FontLight",
    color: Colors.grey,
  },
  outlineButton: {
    backgroundColor: "#ffffff",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  OutlineButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "FontSemiBold",
  },
});

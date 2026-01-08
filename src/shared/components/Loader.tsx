import { theme } from "@/styles";
import React from "react";
import { ActivityIndicator, StyleSheet, View, ViewStyle } from "react-native";

interface LoaderProps {
  size?: "small" | "large";
  color?: string;
  fullScreen?: boolean;
  style?: ViewStyle;
}

export default function Loader({
  size = "large",
  color = theme.colors.primary.main,
  fullScreen = false,
  style,
}: LoaderProps) {
  if (fullScreen) {
    return (
      <View style={[styles.fullScreenContainer, style]}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  fullScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background.default,
  },
});

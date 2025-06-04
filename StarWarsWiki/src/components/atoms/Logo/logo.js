import { StyleSheet, View, Image } from "react-native";
import React from "react";
import logoImage from "../../../../assets/LogoSplash.png";

export const Logo = () => {
  return <Image style={styles.logo} source={logoImage} />;
};

const styles = StyleSheet.create({
  logo: {
    height: 64,
    width: 64,
  },
});

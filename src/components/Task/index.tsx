import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  text: string;
};

export default function Task({ text }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular} />
    </View>
  );
}

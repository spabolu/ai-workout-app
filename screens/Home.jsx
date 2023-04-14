import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/solid";

function Home({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-5xl font-black text-amber-400 mt-24">
        AI Workout
      </Text>
      <Text className="text-white mt-12 mx-8 text-lg text-center">
        Optimized to building muscle as fast as possible above all else—with
        science.
      </Text>

      <Text className="text-white text-md text-center mt-56 mx-20">
        By continuing you agree to our{" "}
        <Text className="font-bold">Privacy Policy</Text> and{" "}
        <Text className="font-bold">Terms of Use</Text>
      </Text>

      <TouchableOpacity
        onPress={() => {
          console.log('"Restore Purchases" Tapped!');
        }}
      >
        <Text className="text-blue-500 mt-10 tracking-tight">
          Restore Purchases
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('"Already a user?" Tapped!');
        }}
      >
        <Text className="text-blue-500 mt-6 tracking-tight">
          Already a user?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('"Start" Tapped!');
          navigation.navigate("Onboarding");
        }}
      >
        <Text className="text-amber-400 text-base font-extrabold uppercase mt-10">
          Start
          <ChevronRightIcon color={"rgb(251 191 36)"} size={18} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

function Onboarding() {
  return (
    <View className="flex-1 items-center justify-center bg-stone-200">
      <Text className="uppercase text-2xl font-bold">What is your gender?</Text>
      <Text className="mt-2 text-stone-800">
        Gender can influence your optimal rep range
      </Text>

      <TouchableOpacity>
        <View className="border-2 border-solid rounded-lg border-stone-500">
          <Text className="py-6 px-8">Male</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View className="border-2 border-solid rounded-lg border-stone-500">
          <Text className="py-6 px-8">Female</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Prefer not to say</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Onboarding;

import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface StatCardProps {
  title: string;
  value: string | number;
  iconName: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  bgColor: string;
}

export default function StatCard({ title, value, iconName, iconColor, bgColor }: StatCardProps) {
  return (
    <View className={`${bgColor} py-[1.2rem]  rounded-lg p-8 flex-1 m-2`}>
      <Text className="text-white  text-xs mb-2">{title}</Text>
      <View className="flex-row items-center gap-4 justify-center">
        <Text className="text-white text-3xl font-bold">{value}</Text>
        <Ionicons name={iconName} size={24} color={iconColor} />
      </View>
    </View>
  );
}

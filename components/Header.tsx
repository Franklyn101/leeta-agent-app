import { View, Text, TouchableOpacity, Image } from "react-native";
import { MenuIcon } from "@/constants/icon";

// import { BellIcon, MenuIcon, SearchIcon } from "@/constants/icons";
type HeaderProps = {
  title: string; 
};


const Header: React.FC<HeaderProps> = ( {title}) => {
 

  return (
    <View className="px-[18.5px] py-[36px] border-b-[0.5px] bg-bgprimary border-[#E6E6E6] flex-row justify-between items-center">
      <View style={{ gap: 90 }} className="flex-row items-center">
        <TouchableOpacity className="h-[34px] w-[34px] items-center justify-center">
          {/* <MenuIcon /> */}
           
          <Image 
          source={require("../assets/images/menuicon.png")}
          />
        </TouchableOpacity>
        <Text className="font-grotesk_semibold text-white text-[24px] leading-8 text-primary-main">{title}</Text>
      </View>
      <View style={{ gap: 12 }} className="flex-row">
       
      </View>
    </View>
  );
};

export default Header;

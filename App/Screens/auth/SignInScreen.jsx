import { Text, View } from "react-native";
import React, { useState } from "react";

import InputComponent from "../../Components/InputComponent";
import globalStyles from "../../styles/GlobalStyles";
import { appColors } from "../../constants/appColors";
import { Lock, Sms } from "iconsax-react-native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={[globalStyles.container, {
      alignItems: 'center', justifyContent: 'center', padding: 20
    }]}>
      <InputComponent
        value={email}
        placeholder={"Email"}
        onChange={(val) => setEmail(val)}
        allowClear={true}
        affix={<Sms
          size="32"
          color={appColors.gray}
         />}
      />
      <InputComponent
        value={password}
        placeholder={"Your Password"}
        onChange={(val) => setPassword(val)}
        isPassword={true}
        allowClear={true}
        affix={<Lock size="32" color={appColors.gray}/>}
      />
    </View>
  );
};

export default SignInScreen;

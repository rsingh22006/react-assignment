import React from "react";

export const useShowPassword = (type='login') => {
  const [showPassword, setShowPassword] = React.useState(type==='login'?false:{newPassword:false,confirmNewPassword:false});
  const handleClickShow = (name) =>{
    if(type==='login')setShowPassword(prev=>!prev);
    else setShowPassword({...showPassword,[name]:!showPassword[name]})
  };
  return {showPassword,handleClickShow};
}
import { useState } from "react";

export const useShowPassword = (type = 'login') => {
  const [showPassword, setShowPassword] = useState(type === 'login' ? false : { password: false, confirmNewPassword: false });
  const handleClickShow = (name) => {
    if (type === 'login') {
      setShowPassword(prev => !prev);
    } else if (type === 'signup') {
      setShowPassword({ ...showPassword, [name]: !showPassword[name] })
    }
  };
  return { showPassword, handleClickShow };
}
import { useState } from "react";

export const useShowPassword = (type = 'single') => {
  const [showPassword, setShowPassword] = useState(type === 'single' ? false : { password: false, confirmNewPassword: false });
  const handleClickShow = (name) => {
    if (type === 'single') {
      setShowPassword(prev => !prev);
    } else {
      setShowPassword({ ...showPassword, [name]: !showPassword[name] })
    }
  };
  return { showPassword, handleClickShow };
}
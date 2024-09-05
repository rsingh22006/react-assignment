import { useState, useEffect } from 'react';

//here I will test the linter config, kindly ignore this hook.

export const UseOnlineStatus=()=>{
  const [isOnline, setIsOnline] = useState(true);
//   const internet = navigator.onLine;
//   console.log('internet',internet)
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
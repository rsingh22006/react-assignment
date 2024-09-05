import React from 'react'

export const useFocusAndBlur = (initData) => {
    const [focusData, setFocusData] = React.useState(initData);
    const handleChangeFocusAndBlur = (event, type) => {
        setFocusData({ ...focusData, [event.target.name]: type === 'focus' ? true : false })
      }
  return {focusData,handleChangeFocusAndBlur}
}
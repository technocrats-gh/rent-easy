import React from 'react'

export const UserId = () => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage)
  const userId = userData?.sub;

  return userId;
}

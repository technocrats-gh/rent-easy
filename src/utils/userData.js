import React from 'react'

export const UserData = () => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage)

  return userData;
}

export const UserId = () => {
  const dataFromLocalStorage = localStorage.getItem("userRentEasy");
  const userData = JSON.parse(dataFromLocalStorage)
  const userId = userData?.sub;

  return userId;
}


import React, { createContext, useContext, useState } from 'react';

// สร้าง Context
const MyContext = createContext();

// สร้าง Provider Component สำหรับคอมโพเนนต์ที่จะใช้ Context
export const MyContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  // ใส่ค่า role และ setRole ลงใน Context
  const contextValue = {
    role,
    setRole,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

// สร้าง Hook สำหรับการใช้งาน Context
export const useMyContext = () => {
  return useContext(MyContext);
};
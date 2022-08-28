import { useState, useEffect } from "react";

const usePersistentState = (key, initialValue) => {
   const [value, setValue] = useState(() => {
      const beforeTheme = localStorage.getItem(key);

      if(beforeTheme){
         return JSON.parse(beforeTheme);
      }

      return initialValue
   })

   useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(value))
   }, [key, value])

   return [value, setValue]
}

export default usePersistentState;
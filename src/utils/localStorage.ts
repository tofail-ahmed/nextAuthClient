"use client";
export const getLocalStorage = (key: string) => {
  console.log("Attempting to get item from localStorage with key:", key);

  if (!key) {
    console.log("Key is not provided.");
    return "not found";
  }

  if (typeof window !== "undefined") {
    const item = localStorage.getItem(key);
    console.log("Item retrieved from localStorage:", item);
    return item;
  }

  console.log("Window is not defined.");
  return null;
};
export const removeLocalStorage=(key:string)=>{
  if(!key || typeof window == "undefined"){
        return " "
  }
  return localStorage.removeItem(key);
}
import { jwtDecode } from "jwt-decode";


type DecodedToken = {
 
};


export const decodedToken = (token: string | null): null => {
  if (token === null) {

    return null;
  }
 
  return jwtDecode(token);
};



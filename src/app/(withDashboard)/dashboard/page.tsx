// "use client"
import { UserProps } from "@/components/shared/Navbar";
import { SessionInfo } from "@/utils/actions/session";
import { authOptions } from "@/utils/authOptions";
import { getLocalStorage } from "@/utils/localStorage";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage =  async() => {
  // const [sessionToken, setSessionToken] = useState<UserProps | null>(null);
  // const [accessToken,setAccesstoken]=useState<string|null>(null)
 const sessionToken = await getServerSession(authOptions);
  

//
  console.log(sessionToken);
  
 
  return (
    <div>
      {sessionToken?.user?.email && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome{" "}
            <span className="text-green-400 italic">{sessionToken?.user?.name}</span>
          </h1>
          <h1 className="text-2xl text-center mt-10">
            Logged in with{" "}
            <span className="text-green-400">{sessionToken?.user?.email}</span>
          </h1>
          <Image
            src={sessionToken?.user?.image} 
            alt="image"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;

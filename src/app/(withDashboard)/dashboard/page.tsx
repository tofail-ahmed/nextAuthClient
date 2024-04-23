"use client";
import { UserProps } from "@/components/shared/Navbar";
import { SessionInfo } from "@/utils/actions/session";
import { authOptions } from "@/utils/authOptions";
import { decodedToken } from "@/utils/jwt/jwt";
import { getLocalStorage } from "@/utils/localStorage";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  // const sessionToken= await SessionInfo()
  // const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState<UserProps | null>(null);
  // const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const token = await SessionInfo();
        setSessionToken(token);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching session:", error);
        setLoading(false);
      }
    };
  
    fetchSession();
  }, []);

 const accessToken=localStorage.getItem("accessToken")

 const accessData:any = decodedToken(accessToken) 

  // console.log(sessionToken);
  // console.log(accessData);

  return (
    <div>
      {sessionToken?.user?.email && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome{" "}
            <span className="text-green-400 italic">
              {sessionToken?.user?.name}
            </span>
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
      {
        accessToken &&(
          <>
          
          <h1 className="text-2xl text-center mt-10">
            Logged in with{" "}
            <span className="text-green-400">{accessData?.email}</span>
          </h1>
          
        </>
        )
      }
    </div>
  );
};

export default DashboardPage;

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      {session?.user?.email && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome{" "}
            <span className="text-green-400 italic">{session?.user?.name}</span>
          </h1>
          <h1 className="text-2xl text-center mt-10">
            Logged in with{" "}
            <span className="text-green-400">{session?.user?.email}</span>
          </h1>
          <Image
            src={session?.user?.image} 
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

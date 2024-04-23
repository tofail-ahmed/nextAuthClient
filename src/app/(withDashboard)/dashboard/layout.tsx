"use client"
import Sidebar from "@/components/shared/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { getLocalStorage } from "@/utils/localStorage";
import type { Metadata } from "next";
import React, { useEffect, useState } from 'react';
import { UserProps } from "@/components/shared/Navbar";
import { useRouter } from "next/navigation";
import { SessionInfo } from "@/utils/actions/session";

const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sessionToken, setSessionToken] = useState<UserProps | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

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

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (sessionToken || accessToken) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    }
  }, [loading, sessionToken, accessToken, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(sessionToken);
  console.log(accessToken);

  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-base-200 rounded-box ml-2">{children}</div>
      </div>
    </div>
  );
}

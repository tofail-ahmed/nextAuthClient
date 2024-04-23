"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../authOptions"

export const SessionInfo=async ()=>{
    const  sessionToken= await getServerSession(authOptions)
      return  sessionToken
}
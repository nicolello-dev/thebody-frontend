"use client";
import { useUser } from "@/context/userContext";

export default function Test() {
  const user = useUser();
  return JSON.stringify(user);
}

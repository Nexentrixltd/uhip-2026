'use client'
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function LandingPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => (
    router.replace('/home')
  ), [])
  return null

}
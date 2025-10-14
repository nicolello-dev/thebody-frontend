"use client";
import CommandStream from "@/components/commandStream";
import { Header } from "@/components/header";
import { RotatingLogo } from "@/components/rotatingLogo";
import TerminalLogs from "@/components/terminalLogs";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Header text="_SELEZIONA MODULO OPERATIVO //" />
      <RotatingLogo />
      <TerminalLogs />
      <CommandStream />
    </>
  );
}

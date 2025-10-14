"use client";
import React, { createContext, useContext, useMemo } from "react";

export type Temperature = "-2" | "-1" | "0" | "1" | "2";

type Ctx = {
  temperature: Temperature;
  setTemperature: (t: Temperature) => void;
};
const TemperatureContext = createContext<Ctx>({
  temperature: "0",
  setTemperature: () => {},
});

export function TemperatureProvider({
  temperature,
  setTemperature,
  children,
}: {
  temperature: Temperature;
  setTemperature: (t: Temperature) => void;
  children: React.ReactNode;
}) {
  const value = useMemo(
    () => ({ temperature, setTemperature }),
    [temperature, setTemperature]
  );
  return (
    <TemperatureContext.Provider value={value}>
      {children}
    </TemperatureContext.Provider>
  );
}

export function useTemperature() {
  return useContext(TemperatureContext);
}

import { BACKEND_IP, BACKEND_PORT } from "./common";

export type Item = {
  name: string;
};

export type User = {
  name: string;
  password: string;
  hunger: number;
  thirst: number;
  oxygen: number;
  sleep: number;
  biofeedback: number;
  temperature: number;
  status: string;
  isRobot: boolean;
  energy: number;
  unlockedAreas: number[][];
};

export async function setAuthCookies(userId: string) {
  await fetch("/api/setCookie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: "userId", value: userId }),
  });
}

export async function getUserFromId(userId: string): Promise<User | null> {
  const response = await fetch(
    `http://${BACKEND_IP}:${BACKEND_PORT}/user?name=${userId}`
  );

  if (response.ok) {
    const user = await response.json();
    return user as User;
  }
  return null;
}

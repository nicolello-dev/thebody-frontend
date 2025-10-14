"use client";
import { useRouter } from "next/navigation";
import { NavIcon } from "../navIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function UserIcon() {
  const router = useRouter();
  return (
    <NavIcon
      onClick={() => {
        router.push("/user");
      }}
    >
      <FontAwesomeIcon
        className="max-w-[40px] max-h-[40px]"
        icon={faUser}
        size="2x"
      />
    </NavIcon>
  );
}

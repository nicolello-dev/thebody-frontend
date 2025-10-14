"use client";
import { useRouter } from "next/navigation";
import { NavIcon } from "../navIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export function DatabaseIcon() {
  const router = useRouter();
  return (
    <NavIcon
      onClick={() => {
        router.push("/database");
      }}
    >
      <FontAwesomeIcon
        className="max-w-[40px] max-h-[40px]"
        icon={faDatabase}
        size="2x"
      />
    </NavIcon>
  );
}

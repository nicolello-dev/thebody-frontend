"use client";
import { useRouter } from "next/navigation";
import { NavIcon } from "../navIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

export function MapIcon() {
  const router = useRouter();
  return (
    <NavIcon
      onClick={() => {
        router.push("/map");
      }}
    >
      <FontAwesomeIcon
        className="max-w-[40px] max-h-[40px]"
        icon={faMap}
        size="2x"
      />
    </NavIcon>
  );
}

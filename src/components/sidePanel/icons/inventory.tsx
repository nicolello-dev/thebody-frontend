"use client";
import { useRouter } from "next/navigation";
import { NavIcon } from "../navIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

export function InventoryIcon() {
  const router = useRouter();
  return (
    <NavIcon
      onClick={() => {
        router.push("/inventory");
      }}
    >
      <FontAwesomeIcon
        className="max-w-[40px] max-h-[40px]"
        icon={faBox}
        size="2x"
      />
    </NavIcon>
  );
}

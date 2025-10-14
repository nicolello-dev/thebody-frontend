"use client";
import { useRouter } from "next/navigation";
import { NavIcon } from "../navIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

export function CraftingIcon() {
  const router = useRouter();
  return (
    <NavIcon
      onClick={() => {
        router.push("/crafting");
      }}
    >
      <FontAwesomeIcon
        className="max-w-[40px] max-h-[40px]"
        icon={faHammer}
        size="2x"
      />
    </NavIcon>
  );
}

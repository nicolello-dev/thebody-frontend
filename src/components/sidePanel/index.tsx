"use client";
import MonitorWidget from "../monitorWidget";
import { CraftingIcon } from "./icons/crafting";
import { DatabaseIcon } from "./icons/database";
import { FullscreenSwitcher } from "./icons/fullscreenSwitcher";
import { InventoryIcon } from "./icons/inventory";
import { MapIcon } from "./icons/map";
import { UserIcon } from "./icons/user";

export function SidePanel() {
  return (
    <ul
      className="bg-[url('/selectbg.png')] w-[120px] h-full bg-cover"
      style={{
        backgroundPositionY: "center",
      }}
    >
      <div className="flex flex-col h-[calc(50vh-150px)] justify-between items-center">
        <FullscreenSwitcher />
        <InventoryIcon />
        <CraftingIcon />
      </div>
      <MonitorWidget />
      <div className="flex flex-col h-[calc(50vh-150px)] justify-between items-center">
        <DatabaseIcon />
        <MapIcon />
        <UserIcon />
      </div>
    </ul>
  );
}

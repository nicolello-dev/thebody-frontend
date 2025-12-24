import type { DamageType } from "@/types/inventory";

// assets/util
export const slugify = (name: string) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "e")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const damageIconFor = (t?: DamageType) => {
  switch (t) {
    case "contundente":
      return "/cont.png";
    case "chimico":
      return "/chim.png";
    case "termico":
      return "/temp.png";
    case "perforante":
      return "/perf.png";
    default:
      return null;
  }
};

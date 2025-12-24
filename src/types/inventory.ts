export type ItemKind = "alimento" | "risorsa" | "arma";

export type BaseMeta = {
  description: string;
  kind: ItemKind;
  tier?: 1 | 2 | 3;
};

export type FoodMeta = BaseMeta & {
  kind: "alimento";
  isGluten?: boolean;
  isSugar?: boolean;
  isMeat?: boolean;
  isVegetable?: boolean;
  isAlcohol?: boolean;
  isDrugs?: boolean;
  isFood?: boolean;
  isDrink?: boolean;
  effectPercent?: number;
};

export type DamageType = "contundente" | "chimico" | "termico" | "perforante";

export type WeaponMeta = BaseMeta & {
  kind: "arma";
  danno?: number;
  projectiles?: string;
  damageType?: DamageType;
};

export type ResourceMeta = BaseMeta & { kind: "risorsa" };

export type Item = {
  id: string;
  name: string;
  icon: string;
  image?: string;
  x: number;
  y: number;
  w: number;
  h: number;
} & (FoodMeta | WeaponMeta | ResourceMeta);

export type InvCategory = "zaino" | "cassa";

export type InvSpec = {
  cols: number;
  rows: number;
  label: string;
  icon: string;
  category: InvCategory;
};

export type HoverKey = "zaino" | "grid5x5" | string;

export type DragState = {
  id: string;
  srcInv: HoverKey;
  icon: string;
  name: string;
  start: { x: number; y: number };
  pos: { x: number; y: number };
  client: { x: number; y: number };
  srcRect: { left: number; top: number; width: number; height: number };
  srcCellW: number;
  srcCellH: number;
  itemW: number;
  itemH: number;
};

export type BackendPayload = {
  user: Item[];
  others: Array<InvSpec & { inventory: Item[] }>;
};

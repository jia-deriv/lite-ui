export type TGenericSizes = "xxl" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";

export type BasicGenericSizes =
  | Extract<TGenericSizes, "sm" | "md" | "lg" | "xl">
  | "full";

import { getMode } from "@ionic/core";
import React from "react";

interface IonIconProps {
  ios: string; // eg '/svg/add.svg'
  md: string; // eg '/svg/add-sharp.svg'
  color?: string; // eg 'primary' (ionic colors)
  slot?: "start" | "end" | "icon-only";
}

export const IonIcon: React.FC<IonIconProps> = (props: IonIconProps) => {
  const mode = typeof window !== "undefined" ? getMode() : "md";

  return (
    <ion-icon
      style={{ verticalAlign: "middle" }}
      src={props[mode]}
      color={props.color}
      slot={props.slot}
    />
  );
};

export default IonIcon;

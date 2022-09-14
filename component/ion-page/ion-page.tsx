import { PropsWithChildren } from "react";
import styles from "./ion-page.module.css";

/* eslint-disable-next-line */
export interface IonPageProps {}

export function IonPage({ children }: PropsWithChildren<IonPageProps>) {
  return <div className={`${styles["ion-page"]} ion-page`}>{children}</div>;
}

export default IonPage;

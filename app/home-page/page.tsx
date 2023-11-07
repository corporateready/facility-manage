"use client"
import React from "react";
import styles from "./home.module.scss";
import LayoutPage from "./layout-page";

type Props = {};

const Index = (props: Props) => {
  const [isOpenWidget, setisOpenWidget] = React.useState(true)
  const handlerIsOpenWidgetMenu = () => {
    setisOpenWidget(!isOpenWidget)
  }
  return (
    <LayoutPage handlerIsOpenWidgetMenu={handlerIsOpenWidgetMenu}
    isOpenWidget={isOpenWidget}
    >
      <div className={styles.home__page}>
        <h2 className={styles.title}>home page</h2>
      </div>
    </LayoutPage>
  );
};

export default Index;

import React from 'react'
import Header from "../../components/header"
import styles from "./layout.page.module.scss"
import WidgetMenu from "../../components/widget-menu"
type Props = {
    handlerIsOpenWidgetMenu: () => void,
    isOpenWidget: boolean,
    children: React.ReactNode
}

const Index = ({
    isOpenWidget,
    handlerIsOpenWidgetMenu,
  children,
}:Props) => {
  return (
    <div className={styles.layout__page}>
    <Header />
    {children}
    <WidgetMenu handlerIsOpenWidgetMenu={handlerIsOpenWidgetMenu}
    isOpenWidget={isOpenWidget}
    />
    </div>
  )
}

export default Index
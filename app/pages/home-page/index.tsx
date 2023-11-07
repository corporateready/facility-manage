import React from 'react'
import styles from "./home.module.scss"

type Props = {}

const Index = (props: Props) => {
  return (
    <div className={styles.home__page}>
        <h2 className={styles.title}>home page</h2>
    </div>
  )
}

export default Index
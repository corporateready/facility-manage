import React from 'react'
import styles from "./login.page.module.scss"

type Props = {}

const Index = (props: Props) => {
  const handlerLogin = () => {}
  return (
    <div className={styles.login__page}>
        <h2 className={styles.title}>login</h2>
        <form className={styles.form}>
        <input type="text" placeholder='first name' />
        <input type="text" placeholder='last name'/>
        <input type="email" placeholder='email'/>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Index
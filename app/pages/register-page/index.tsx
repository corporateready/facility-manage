"use client"
import React from "react";
import styles from "./register.page.module.scss";
import { redirect } from 'next/navigation';
import Link from 'next/link';

type Props = {};

const Index = (props: Props) => {
    const handlerRegistration = () => {
        
    }
  return (
    <div className={styles.register__page}>
      <h2 className={styles.title}>registration</h2>
      <form className={styles.form} onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='first name' />
        <input type="text" placeholder='last name'/>
        <input type="email" placeholder='email'/>
        <Link href={'/home-page'}>registration</Link>
      </form>
    </div>
  );
};

export default Index;

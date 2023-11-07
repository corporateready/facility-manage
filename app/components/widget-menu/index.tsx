import React from "react";
import styles from "./widget.menu.module.scss";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { BiSolidArrowFromLeft } from "react-icons/bi";
import { BiSolidArrowFromRight } from "react-icons/bi";
import { motion } from 'framer-motion';

type Props = {
  handlerIsOpenWidgetMenu: () => void;
  isOpenWidget: boolean;
};

const Index = (props: Props) => {
  const[isHover, setIsHover] = React.useState(false)

  const navItems = [
    {id:1, name:'home', icon:<FiHome size="25" />, href:'/'},
    {id:2, name:'my account', icon: <MdOutlineManageAccounts size="25" />, href:'/'}
  ]
  return (
    <div className={styles.widget__menu}>
      <div
        className={
          props.isOpenWidget
            ? styles.menu__wrapper
            : styles.menu__wrapper_active
        }
      >
        <button type="button" onClick={() => props.handlerIsOpenWidgetMenu()}>
          {props.isOpenWidget ? (
            <BiSolidArrowFromRight size="25" />
          ) : (
            <BiSolidArrowFromLeft size="25" />
          )}
        </button>
        <div className={styles.navigate__items}>
          {navItems.map((item)=>(
            <Link key={item.id} href={"/"} className={styles.navigate__item}>
            <motion.div
            onHoverStart={()=>setIsHover(true)}
            onHoverEnd={()=>setIsHover(false)}
            >{item.icon}</motion.div> {!props.isOpenWidget && <span>{item.name}</span>}
            {/* {isHover && item.id && <span key={item.id} className='ml-4'>{item.name}</span>} */}
          </Link>
          ))}
          {/* <Link href={"/"} className={styles.navigate__item}>
            <motion.div
            onHoverStart={()=>setIsHover(true)}
            onHoverEnd={()=>setIsHover(false)}
            ><FaHome size="25" /></motion.div> {!props.isOpenWidget && <span>home</span>}
            {isHover && <span className='ml-4'>home</span>}
          </Link> */}
          {/* <Link href={"/"} className={styles.navigate__item}>
            <motion.div
            onHoverStart={()=>setIsHover(true)}
            onHoverEnd={()=>setIsHover(false)}
            ><MdOutlineManageAccounts size="25" /></motion.div>
            {!props.isOpenWidget && <span>my account</span>}
            {isHover && <span className='ml-4'>my account</span>}
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Index;

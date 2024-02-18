// import { useState } from 'react'
import styles from './Sidebar.module.scss';


export default function Sidebar() {
  // const [count, setCount] = useState(0)
	
	// function add(){
	// 	setCount((count:number)=>count+1 )
	// }

  return (
    <>
      <div className={styles.backgraund}>
        <p className={styles.title}>ホーム</p>
        <p className={styles.title}>入力</p>
        <p className={styles.title}>履歴</p>
      </div>
    </>
  )
}
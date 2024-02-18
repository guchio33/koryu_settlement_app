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
        <ul>
          <li>
            <a href="/" className={styles.title}> ホーム </a>
          </li>
          <li>
            <a href="/input" className={styles.title}> 入力 </a>
          </li>
          <li>
            <a href="/history" className={styles.title}> 履歴 </a>
          </li>
        </ul>
      </div>
    </>
  )
}
import { useState } from 'react'
import styles from './sidebar.module.scss';


export default function Sidebar() {
  const [count, setCount] = useState(0)
	
	function add(){
		setCount((count:number)=>count+1 )
	}

  return (
    <>
      <div className={styles.backgraund}>
        <h1 className={styles.title}>aaaa</h1>
        <p>{count}</p>
			  <button onClick={add}>+</button>
      </div>
    </>
  )
}
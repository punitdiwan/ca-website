
import Layout from '../Component/Layout'
import styles from '../styles/Home.module.css'
import FirstPage from './FirstPage'

import { IconContext } from "react-icons";
export default function Home() {
  

  return (
    <div className={styles.container}>
   <Layout>

     <FirstPage/>
   </Layout>
    </div>
  )
}

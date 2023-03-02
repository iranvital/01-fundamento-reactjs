import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Iran Vital"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab, obcaecati tempore officia laudantium cupiditate? Natus, deleniti! Nemo et sed amet, enim voluptates dignissimos adipisci modi, error provident iste aliquid."
          />

          <Post 
            author="Iran Vital"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab, obcaecati tempore officia laudantium cupiditate? Natus, deleniti! Nemo et sed amet, enim voluptates dignissimos adipisci modi, error provident iste aliquid."
          />
        </main>
      </div>
    </div>
  )
}

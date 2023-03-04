import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/iranvital.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Iran Vital</strong>
              <time title="03 de março às 08:13" dateTime="2023-03-03 08:13:30">Certa de 1h atras</time>
            </div>

            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom dev parabens!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/iranvital.png"
          />
          <div className={styles.authorInfo}>
            <strong>Iran Vital</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de março às 08:13" dateTime="2023-03-03 08:13:30">Publicado há 1h</time>
      </header> 

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad quisquam accusamus harum laboriosam vel saepe aliquam, repudiandae quos repellat corporis nisi, explicabo magni veritatis ex. Rem ipsa magni distinctio!</p>
        <p><a href=''>iranvital@yahoo.com.br</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#react</a>
        </p>

      </div>
    </article>
    
  )
}
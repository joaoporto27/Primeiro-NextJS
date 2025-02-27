import styles from '../styles/Block.module.css';

export	default	function Block( { title, content  } )	{
    return	(
        <div className={styles.block}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}


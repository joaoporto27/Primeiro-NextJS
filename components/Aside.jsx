import styles from '../styles/Aside.module.css';

export	default	function Aside()	{
    return	(
        <aside className={styles.aside}>
        <div className={styles.bigmac}>
            <img src="/bigmac.png" alt="Big Mac" />
        </div>
    </aside>
    );
}


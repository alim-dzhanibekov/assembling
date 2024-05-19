import React from "react";
import styles from './styles.css';

const onClickEvent = (e) => {
    e.preventDefault();
    alert('you me')
}

const App = () => {
    return (
        <div className={styles.content}>
            <div className={styles.label}> Create REACT </div>
            <button className={styles.btn} onClick={onClickEvent}>женя пидр нажми на эту кнопку</button>
        </div>
    )
}

export default App
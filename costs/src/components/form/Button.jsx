import styles from './Button.module.css'

export function Button({ type, value}){
    return (
        <div className={styles.container}>
            <button type={type}>{value}</button>

        </div>
    )
}
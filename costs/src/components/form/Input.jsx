import styles from "./Input.module.css";

export default function Input({type, text, name, placeholder, handleOnChange, value}) {

    return (
        <div className={styles.container}>
        
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                id={name}
                value={value}
            />
        
        </div>
    )
}
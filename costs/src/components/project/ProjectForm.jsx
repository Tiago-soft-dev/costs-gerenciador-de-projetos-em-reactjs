import styles from './ProjectForm.module.css'

export function ProjectForm(){
  return (
    <div className={styles.container}>
      <form>
        <div>
         <input type='text' placeholder='Nome do projeto...'/>
        </div>
        <div>
         <input type='number' placeholder='Orçamento do projeto...'/>
        </div>

        <div>
          <select name='category_id'>
            <option disabled>Selecione a categoria</option>
          </select>
        </div>

        <div>
          <input type='submit' value='Criar'/>
        </div>
      
      </form>
    </div>
      )
}
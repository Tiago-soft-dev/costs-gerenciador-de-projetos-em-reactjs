import { Button } from '../form/Button'
import Input from '../form/Input'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'

export function ProjectForm({btnText}){
  return (
    <div className={styles.container}>
      <form>
        <Input type='text' text='Nome do projeto' name='name' placeholder='Nome do projeto...'/>
        
        <Input type='number' text='Orçamento do projeto' placeholder='Orçamento do projeto...' name='budget'/>
        

        {/* <div>
          <select name='category_id'>
            <option disabled selected>Selecione a categoria</option>
          </select>
        </div> */}

        <Select name='category_id' text='Selecione a categoria'/>

        
        
        <Button type='submit' value={btnText}/>

      </form>
    </div>
      )
}
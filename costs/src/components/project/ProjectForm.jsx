import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../form/Button'
import Input from '../form/Input'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'



export function ProjectForm({btnText}){

 const [categories, setCategories] = useState([]) 

  // try {
  //   const response = async () => {
  //    await axios('http://localhost:5000/categories')
    
  //   setCategories(response.data)
  //   }

    

  // } catch (error) {
  //   console.log(error);
  // }

  // fetch('http://localhost:5000/categories', {
  //   method: 'get',
  //   headers: {
  //     'Content-Type' : 'application/json',
  //   },
  // })
    
  useEffect(()=>{
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content--type' : 'aplication/json',
      },
    })
    .then((resp) => resp.json())
    .then((data)=>{
      setCategories(data)
    })
    .catch((err)=>console.log(err))
  }, [])

  return (
    <div className={styles.container}>
      <form>
        <Input 
          type='text' 
          text='Nome do projeto' 
          name='name' 
          placeholder='Nome do projeto...'/>
        
        <Input 
          type='number' 
          text='Orçamento do projeto' 
          placeholder='Orçamento do projeto...' 
          name='budget'/>
        

        {/* <div>
          <select name='category_id'>
            <option disabled selected>Selecione a categoria</option>
          </select>
        </div> */}

        <Select 
         name='category_id' 
         text='Selecione a categoria'
         options={categories}
         />

        
        
        <Button type='submit' value={btnText}/>

      </form>
    </div>
      )
}
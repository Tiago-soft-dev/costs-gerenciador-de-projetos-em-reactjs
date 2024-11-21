import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '../form/Button'
import Input from '../form/Input'
import Select from '../form/Select'
import styles from './ProjectForm.module.css'



export function ProjectForm({handleSubmit, btnText, projectData}){

 const [categories, setCategories] = useState([]) 
 const [project, setProject] = useState(projectData || {})
    
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

    const submit = (e)=>{
      e.preventDefault()
      handleSubmit(project)
    }

    function handleChange(e){
      setProject({...project, [e.target.name] : e.target.value})
    }

    function handleCategory(e){
      setProject({
        ...project,
        category: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        },
      })
    }


  return (
    <div className={styles.container}>
      <form onSubmit={submit}>
        <Input 
          type='text' 
          text='Nome do projeto' 
          name='name' 
          placeholder='Nome do projeto...'
          handleOnChange={handleChange}
          value={project.name ? project.name : ''}
          />
        
        <Input 
          type='number' 
          text='Orçamento do projeto' 
          placeholder='Orçamento do projeto...' 
          name='budget'
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ''}
          />
        

        {/* <div>
          <select name='category_id'>
            <option disabled selected>Selecione a categoria</option>
          </select>
        </div> */}

        <Select 
         name='category_id' 
         text='Selecione a categoria'
         options={categories}
         handleOnChange={handleCategory}
         value={project.category ? project.category.id: ''}
         />

        
        
        <Button type='submit' value={btnText}/>

      </form>
    </div>
      )
}
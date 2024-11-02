import { ProjectForm } from '../project/ProjectForm'
import style from './NewProject.module.css'

export function NewProject(){
  return (
    <div className={style.container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto e adicione os serviços</p>
      <ProjectForm />
    
    </div>
  )
}
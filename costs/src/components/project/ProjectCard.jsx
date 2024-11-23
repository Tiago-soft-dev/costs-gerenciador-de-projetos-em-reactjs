import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

import styles from './ProjectCard.module.css'

export default function ProjectCard({id, name, budget, category}){
    return (
       <div>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span>R${budget}
            </p>
            <p>
                <span></span>{''}
            </p>
            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
       </div>
    )
}
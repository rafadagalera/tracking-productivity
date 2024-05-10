import React from "react"
import { Link } from "react-router-dom"
export default function Nav(){
    return(
        <>
        <div>
            <Link to = '/'><h1>Home</h1></Link>
            <Link to = 'calendar'><h1>Tarefas semanais</h1></Link>
            <Link to = 'tasks'><h1>Lista de tarefas</h1></Link>
            <Link to = 'progress'><h1>Meu progresso</h1></Link>
        </div>
        </>
    )
}
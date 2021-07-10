import React from 'react'
import {FilterType} from "./HW2";
import style from './Affairs.module.css'

type propsAffair = {
    _id: number
    name: string
    priority: FilterType
}

type AffairPropsType = {
    affair: propsAffair
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={style.tasks}>
            <span className={style.taskText}>{props.affair.name}</span>
            <span className={style.priorityOfTask}>{props.affair.priority}</span>

            <button onClick={deleteCallback} className={style.closeBottom}>X</button>
        </div>
    );
}

export default Affair

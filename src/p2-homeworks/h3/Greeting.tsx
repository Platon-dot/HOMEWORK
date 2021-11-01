import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    error: string
    totalUsers: number
    addUser: () => void
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers}
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onEnter}
                onBlur={setNameCallback}
            />
            <span>{error}</span>
            <button
                onClick={addUser}
                className={s.button}
                disabled={!name}>
                add
            </button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting

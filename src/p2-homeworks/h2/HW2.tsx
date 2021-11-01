import React, {useState} from 'react'
import Affairs from './Affairs'
import style from './Affairs.module.css'

export type AffairPriorityType = 'high' | 'middle' | 'low';
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType


// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    // if (filter === 'high') return affairs.filter(filterElement => filterElement.priority === 'high')
    // if (filter === 'middle') return affairs.filter(filterElement => filterElement.priority === 'middle')
    // if (filter === 'low') return affairs.filter(filterElement => filterElement.priority === 'low')
    // return affairs
    else return affairs.filter(a => a.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: number) => {
    return affairs.filter(filterElement => filterElement._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            <div className={style.main}>
                homeworks 2
                {/*should work (должно работать)*/}
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2

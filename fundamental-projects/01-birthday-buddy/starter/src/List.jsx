import React from 'react'
import { Person } from './Person'

export const List = ({people}) => {
  return (
    <section className='peopleList'>
        {people.map((person) =>{
            return <Person key={person.id} {...person}/>
        })}
    </section>
  )
}

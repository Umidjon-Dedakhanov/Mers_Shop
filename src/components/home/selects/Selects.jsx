import React from 'react'
import { SelectNav } from '../../../utils/helpers'
import style from './Selects.module.css'

export const Selects = () => {
    const names = [
        {id: 1, name:'All Categories'},
        {id: 2, name:'Brake Discs'},
        {id: 3, name:'Brake Pads'},
        {id: 4, name:'Brake Drums'},
        {id: 5, name:'Hot Products'},
      ]
    
  return (
    <div className={style.body}>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>

    </div>
  )
}

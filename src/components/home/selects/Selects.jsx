import React from 'react'
import { SelectNav } from '../../../utils/helpers'
import style from './Selects.module.css'

export const Selects = () => {
    const names = [
        {id: 1, name:'All Categories', link:'all', path:'/all'},
        {id: 2, name:'Brake Discs', link:'brakeDiscs', path:'/brakeDisc'},
        {id: 3, name:'Brake Pads', link:'brakePads', path:'brakePads'},
        {id: 4, name:'Brake Drums', link:'brakeDrums', path:'brakeDrums'},
        {id: 5, name:'Hot Products', link:'hotProducts', path:'hotProducts'},
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

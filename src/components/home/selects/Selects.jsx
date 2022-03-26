import React from 'react'
import { NavLink } from 'react-router-dom'
// import { SelectNav } from '../../../utils/helpers'
import style from './Selects.module.css'

export const Selects = () => {
    // const names = [
    //     {id: 1, name:'All Categories', link:'all', path:'/all'},
    //     {id: 2, name:'Brake Discs', link:'brakeDiscs', path:'/brakeDisc'},
    //     {id: 3, name:'Brake Pads', link:'brakePads', path:'brakePads'},
    //     {id: 4, name:'Brake Drums', link:'brakeDrums', path:'brakeDrums'},
    //     {id: 5, name:'Hot Products', link:'hotProducts', path:'hotProducts'},
    //   ]
    
  return (
    <div className={style.body}>
      {/* <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/> */}
      <NavLink to={'/all'}>All Categories</NavLink>
      <NavLink to={'/brakeDisc'}>Brake Discs</NavLink>
      <NavLink to={'/brakePads'}>Brake Pads</NavLink>
      <NavLink to={'/brakeDrums'}>Brake Drums</NavLink>
      <NavLink to={'/hotProducts'}>Hot Products</NavLink>
      <NavLink to={'/popularProducts'}>Popular products</NavLink>
      <NavLink to={'/brakeDisc'}>Brake Discs</NavLink>
    </div>
  )
}

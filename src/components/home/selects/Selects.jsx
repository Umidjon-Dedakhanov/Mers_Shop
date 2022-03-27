import React from 'react'
import { NavLink } from 'react-router-dom'
// import { SelectNav } from '../../../utils/helpers'
import style from './Selects.module.css'

export const Selects = ({
  to1='all',
  to2='brakeDiscs',
  to3='brakePads',
  to4='brakeDrums',
  to5='hotProducts',
  to6='popularProducts',
  to7='brakeDisc',
}) => {
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
      <NavLink to={to1}>All Categories</NavLink>
      <NavLink to={to2}>Brake Discs</NavLink>
      <NavLink to={to3}>Brake Pads</NavLink>
      <NavLink to={to4}>Brake Drums</NavLink>
      <NavLink to={to5}>Hot Products</NavLink>
      <NavLink to={to6}>Popular products</NavLink>
      <NavLink to={to7}>Brake Discs</NavLink>
    </div>
  )
}

import React from 'react'
import CharacterListItem from './CharacterListItem';

const CharacterList = ({items}) => {
  return (
    <section className='cards'>
    {
        items.map((item,index)=>{
           return <CharacterListItem item={item} key={index}/>
        })
    } 
    </section>
  )
}

export default CharacterList

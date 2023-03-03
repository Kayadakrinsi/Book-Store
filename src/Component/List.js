import React from 'react'
import Title from './Title'

function List() {
    const objs = [{
        id: 1,
        title: 'T1',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque magni? Dolor ipsum perferendis tempora'
    },
    {
        id: 2,
        title: 'T2',
        discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem magnam dignissimos fuga reprehenderit. Error eum sit dolores mollitia voluptate'
    }, 
    {
        id:3,
        title:'T3',
        discription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi recusandae non asperiores, eveniet repellendus eius quibusdam placeat adipisci doloribus saepe ad'
    }]
    // const objList=objs.map(obj=><Title key={obj.title} obj={obj}/>)

    const objList=objs.map(obj=><Title obj={obj}/>)
    return (
        <div>
            {objList}
        </div>
    )
}

export default List

import React from 'react';

// const List = () => (
//     <ul></ul>
// );

const List = ({items}) => (
    <ul>
        { items.map ( item=>
            <li keu={item.label}>
                <strong>{item.label}</strong> {item.value}
            </li>            
        )}
    </ul>
)

export default List;
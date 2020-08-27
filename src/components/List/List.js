import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    paddimng: 10px 0;
    border-bottom: 1px solid lightGrey;
`;

const ListWrapper = styled.div`
    list-styled: none;
    text-align: left;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
`;

const List = ({items, title}) => (
    <>
    <Title>{title}</Title>
    <ListWrapper>
        { items.map ( item=>
            <ListItem key={item.label}>
                <strong>{item.label}</strong> {item.value}
            </ListItem>
        )}
    </ListWrapper>
    </>
)

export default List;
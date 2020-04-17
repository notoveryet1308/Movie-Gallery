import React, {useState} from 'react';
import { TagName, Tag } from './style';
import {useDispatch} from 'react-redux';
import {selectGenre, removeGenre} from '../../redux/GenreReducer/action';
function Genre({name, id}) {
    const dispatch = useDispatch();
    const [tag, setTag]= useState(null);
    let color = tag? '#F68080': 'rgba(246, 128, 128, 0.5)';
    const handleTagSelect = (e)=>{
        if(!tag){
            setTag(name);
            dispatch(selectGenre(id));

        }else{
            setTag("");
            dispatch(removeGenre(id));
        }
    }
    return (
        <Tag 
          className={`${name}`}
          onClick={handleTagSelect}
          style={{background: `${color}`}}
          >
            <TagName>{name}</TagName>
        </Tag>
    )
}

export default Genre

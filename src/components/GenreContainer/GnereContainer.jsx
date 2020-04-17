import React from 'react';
import { Conatiner } from './style';
import { genreList } from '../../Helper';
import Genre from './Genre';

function GnereContainer() {
    return (
        <Conatiner>
            {genreList.map((gen, index) =>
                <Genre
                    key={index}
                    name={gen.name}
                    id={gen.id} />)
            }
        </Conatiner>
    )
}

export default GnereContainer

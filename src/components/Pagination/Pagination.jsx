import React from 'react'
import { PaginationWrapper, PaginationConatiner } from './style';
import {useDispatch} from 'react-redux';

function Pagination({page,setPage}) {

    const dispatch = useDispatch();
    const handleLeftClick = ()=>{
        if(page !== 1){
            dispatch(setPage(page -1));
        }
    }
    const handleRightClick = ()=>{
        dispatch(setPage(page+1));
    }
    return (
        <PaginationConatiner>
            <PaginationWrapper>
                <i 
                   className="fas fa-chevron-left"
                   onClick={handleLeftClick}
                   ></i>
                <i 
                   className="fas fa-chevron-right"
                   onClick={handleRightClick}
                   ></i>

            </PaginationWrapper>
        </PaginationConatiner>
    )
}

export default Pagination

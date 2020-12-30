import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { select, selectSection } from './features/sectionSlice';
import './Section.css'
function Section({Icon, title, color, selected}) {
    const selectedSection = useSelector(selectSection);
    const dispatch = useDispatch();
    const handle = () =>{
        if (title === 'Social') {
            dispatch(select(
                {
                    pSelect: false,
                    pColor: '#808080',
                    sSelect: true,
                    sColor: '#1A73E8',
                    prSelect: false,
                    prColor: '#808080'
                }
            ))
        } else if (title === 'Primary') {
            dispatch(select(
                {
                    pSelect: true,
                    pColor: '#D93025',
                    sSelect: false,
                    sColor: '#808080',
                    prSelect: false,
                    prColor: '#808080'
                }
            )) 
        } else if (title === 'Promotions') {
            dispatch(select(
                {
                    pSelect: false,
                    pColor: '#808080',
                    sSelect: false,
                    sColor: '#808080',
                    prSelect: true,
                    prColor: '#188038'
                }
            ))
        }
    }

    return (
        <div className={`section ${selected && "section--selected"}`}
            style={{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`
            }}

            onClick={handle}
        >
            <Icon />
            <h4>{title}</h4>
            
        </div>
    )
}

export default Section

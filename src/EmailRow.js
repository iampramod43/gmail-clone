import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import DragIndicatorOutlinedIcon from '@material-ui/icons/DragIndicatorOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';
function EmailRow({title, subject, description, id, time}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }));
        history.push('/mail')
    }
    return (
        <div className="emailRow" onClick={openMail} >
            <div className="emailRow__options">
                <DragIndicatorOutlinedIcon className="emailRow__drag"/>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject}{" "}
                    <span className="emailRow__description">- {" "} 
                    {description}
                    </span>
                </h4>
            </div>
            
            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow

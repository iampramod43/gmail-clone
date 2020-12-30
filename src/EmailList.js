import { Checkbox, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectSection } from './features/sectionSlice';
function EmailList() {

    const selectedSection = useSelector(selectSection);
    const dispatch = useDispatch();
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails").orderBy("timeStamp", "desc")
        .onSnapshot((snapshot) => setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        ));
    },[])
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon= {InboxIcon} title="Primary" color={selectedSection.pColor} selected={selectedSection.pSelect} />
                <Section Icon= {PeopleIcon} title="Social" color={selectedSection.sColor} selected={selectedSection.sSelect}/>
                <Section Icon= {LocalOfferIcon} title="Promotions" color={selectedSection.prColor} selected={selectedSection.prSelect} />
            </div>
            <div className="emailList__list">
                {emails.map(({id, data: {to, subject, message, timeStamp}}) => (
                    <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timeStamp?.seconds * 1000).toUTCString()}
                    
                    />
                ))}
            </div>
        </div>
    );
}

export default EmailList

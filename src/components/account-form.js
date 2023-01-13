import React, {useState, useEffect} from 'react';
import API from '../api-service.js';
import {useCookies} from 'react-cookie';

function AccountForm(props){

    const [token] = useCookies(['mr-token']);

    const [providerName, setAccountName] = useState(props.account.providerName)
    const [providerDesc, setAccountDesc] = useState(props.account.providerDesc)
    const [providerSecKey, setAccountSecKey] = useState(props.account.providerSecKey)
    const [providerApiKey, setAccountApiKey] = useState(props.account.providerApiKey)
    const [providerApiEndPoint, setAccountApiEndPt] = useState(props.account.providerApiEndPoint)

    useEffect( () => {
        setAccountName(props.account.providerName);
        setAccountDesc(props.account.providerDesc);
        setAccountSecKey(props.account.providerSecKey);
        setAccountApiKey(props.account.providerApiKey);
        setAccountApiEndPt(props.account.providerApiEndPoint);
    }, [props.account])

    const updateClicked = () => {
        console.log("Update Clicked")
        API.updateAccount(props.account.id, {providerName, providerDesc, providerSecKey, providerApiKey, providerApiEndPoint}, token['mr-token'])
            .then(resp => props.updatedAccount(resp))
            .catch(error => console.log(error))
    }

    const createClicked = () => {
        console.log("Create Clicked")
        API.createAccount({providerName, providerDesc, providerSecKey, providerApiKey, providerApiEndPoint}, token['mr-token'])
            .then(resp => props.accountCreated(resp))
            .catch(error => console.log(error))
    }

    const isDisabled = providerName.length === 0 || providerDesc.length === 0;

    return(
        <React.Fragment>
            { props.account ? (
                <div>
                    <label htmlFor="accountName">Account Name</label><br/>
                    <input id="accountName" type="text" placeholder="Account Name" value={providerName} onChange={evt => setAccountName(evt.target.value)}/><br/>
                    <label htmlFor="accountDesc">Account Desc</label><br/>
                    <input id="accountDesc" type="text" placeholder="Account Desc" value={providerDesc} onChange={evt => setAccountDesc(evt.target.value)}/><br/>
                    <label htmlFor="accountSecKey">Account Sec Key</label><br/>
                    <input id="accountSecKey" type="text" placeholder="Account Sec Key" value={providerSecKey} onChange={evt => setAccountSecKey(evt.target.value)}/><br/>
                    <label htmlFor="accountApiKey">Account Api Key</label><br/>
                    <input id="accountApiKey" type="text" placeholder="Account Api Key" value={providerApiKey} onChange={evt => setAccountApiKey(evt.target.value)}/><br/>
                    <label htmlFor="accountApiEndPt">Account Api Endpoint</label><br/>
                    <input id="accountApiEndPt" type="text" placeholder="Account Endpoint" value={providerApiEndPoint} onChange={evt => setAccountApiEndPt(evt.target.value)}/><br/>
                    {props.account.id ?
                        <button onClick={updateClicked} disabled = {isDisabled}>Update</button> :
                        <button onClick={createClicked} disabled = {isDisabled}>Create</button>
                    }
                </div>
                ) : null 
            }
        </React.Fragment>
    )
}

export default AccountForm;
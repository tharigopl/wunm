import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import API from '../api-service.js';
import {useCookies} from 'react-cookie';

function AccountList(props){

    const [token] = useCookies(['mr-token']);

    const accountClicked = account => {
        props.accountClicked(account)
    }

    const editClicked = account => {
        props.editClicked(account);
    }

    const removeClicked = account => {
        API.deleteAccount(account.id, token['mr-token'])
        .then( () => props.removeClicked(account) )
        .catch(err => console.log(err))
    }

    return (
        <div>
            {props.accounts && props.accounts.map(acc => {
                
              return (
              <div key={acc.id} className="account-item">
              <h2 onClick={evt => accountClicked(acc)}>{acc.providerName}</h2>
              <FontAwesomeIcon icon={faEdit} onClick={evt => editClicked(acc)} />
              <FontAwesomeIcon icon={faTrash} onClick={evt => removeClicked(acc)}/>
              </div>
                )
            })}  
        </div>
    )
}

export default AccountList;
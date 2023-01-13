
import React, {useState, useEffect} from "react";
import './App.css';
import AccountList from './components/account-list';
import AccountDetails from './components/account-details';
import AccountForm from './components/account-form';
import {useCookies} from 'react-cookie';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {useFetch} from './hooks/useFetch';

function App() {

  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [editedAccount, setEditedAccount] = useState(null);
  const [token, setToken, deleteToken] = useCookies(['mr-token']);
  const [data, loading, error] = useFetch();

  useEffect(() => {
    setAccounts(data);
  }, [data])

/*   useEffect(() => {
      fetch('http://192.168.0.95:8000/whenuneedmeapi/accounts/', {
          method: 'GET',
          headers:{
              'Authorization': `Token ${token['mr-token']}`
          }
      })
      .then(res => res.json())
      .then(jsonRes => setAccounts(jsonRes))
      .catch( error => console.log(error))
  }, []); */

  useEffect( () => {
    console.log(token);
    if(!token['mr-token']) window.location.href = '/'
  }, [token])


  const accountClicked = account => {
    setSelectedAccount(account);
  }

  const loadAccount = account => {
    setSelectedAccount(account);
    setEditedAccount(null);
  }
  
  const editClicked = account => {
    setEditedAccount(account);
    setSelectedAccount(null);
  }

  const removeClicked = account => {
    const removeAccounts = accounts.filter(acc => acc.id !== account.id);
    setAccounts(removeAccounts);
  }

  const updatedAccount = account => {
    const newAccount = accounts.map( acc => {
      if(acc.id === account.id){
        return account;
      }
      return acc;
    })
    setAccounts(newAccount)
  }

  const createNewAccount = () => {
    setEditedAccount({providerName:'', providerDesc:'', providerSecKey:'', providerApiKey:'', providerApiEndPoint:''});
    setSelectedAccount(null);
  }

  const accountCreated = account => {
    const newAccounts = [...accounts, account];
    setAccounts(newAccounts);
  }

  const logoutuser = () =>{
    deleteToken(['mr-token']);
  }
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error loading accounts: {error}</h1>
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <FontAwesomeIcon icon={faFilm}  />
        <span>WUNM</span>
        </h1>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutuser} />
      </header>
      <div className="layout"> 
          <div>
            <AccountList accounts={accounts} accountClicked={loadAccount} editClicked={editClicked} removeClicked={removeClicked} />
            <button onClick={createNewAccount} >Create Account</button>
          </div>
          <AccountDetails account={selectedAccount} updateAccount={loadAccount}/>   
          { editedAccount ? <AccountForm account={editedAccount} updatedAccount={updatedAccount} accountCreated={accountCreated} />  : null}    
          
        </div>
    </div>
  );
}

export default App;

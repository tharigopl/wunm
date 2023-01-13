import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {useCookies} from 'react-cookie';


function AccountDetails(props){
    
    const [highlighted, setHighlighted] = useState(-1);
    const [token] = useCookies(['mr-token']);

    let acc = props.account;

    const highlightRate = high => evt => {
        setHighlighted(high);
    }

    const getDetails = () => {
        fetch(`http://192.168.0.95:8000/whenuneedmeapi/accounts/${acc.id}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`
            }
        })
        .then(res => res.json())
        .then(jsonRes => props.updateAccount(jsonRes))
        .catch( error => console.log(error))
    }

    const rateClicked = rate => evt => {
        
        fetch(`http://192.168.0.95:8000/whenuneedmeapi/accounts/${acc.id}/rate_account/`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mr-token']}`
            },
            body: JSON.stringify({stars: rate + 1})
        })
        .then(jsonRes => getDetails())
        .catch( error => console.log(error))
    }

    return (
        <React.Fragment>
            { acc ? (
                <div>
                    <h4>{acc && acc.providerSecKey}</h4>
                    <p>{acc && acc.providerDesc}</p>
                    <FontAwesomeIcon icon={faStar} className={acc.avg_rating > 0 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={acc.avg_rating > 1 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={acc.avg_rating > 2 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={acc.avg_rating > 3 ? 'orange' : ''}/>
                    <FontAwesomeIcon icon={faStar} className={acc.avg_rating > 4 ? 'orange' : ''}/>
                    ({acc.no_of_ratings})
                    <div className="rate-container">
                        <h2>Rate it</h2>
                        { [...Array(5)].map( (element, index) => {
                            return <FontAwesomeIcon key={index} icon={faStar} className={highlighted > index - 1 ? 'purple' : ''} 
                            onMouseEnter={highlightRate(index)}
                            onMouseLeave={highlightRate(-1)}
                            onClick = {rateClicked(index)}
                            />
                        })

                        }
                    </div>
                </div>
                ) : null
            }
            
        </React.Fragment>
    )
}

export default AccountDetails;
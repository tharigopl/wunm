
class API {
    static loginUser(body){
        return fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static registerUser(body){
        return fetch(`${process.env.REACT_APP_API_URL}/whenuneedmeapi/users/`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static updateAccount(acc_id, body, token){
        return fetch(`${process.env.REACT_APP_API_URL}/whenuneedmeapi/accounts/${acc_id}/`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static getAccounts(token){
        return fetch(`${process.env.REACT_APP_API_URL}/whenuneedmeapi/accounts/`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token${token}`
            }
        }).then(resp => resp.json())
    }

    static getAccount(acc_id, body, token){
        return fetch(`${process.env.REACT_APP_API_URL}/whenuneedmeapi/accounts/${acc_id}/`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static createAccount(body, token){
        return fetch(`${process.env.REACT_APP_API_URL}/whenuneedmeapi/accounts/`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token${token}`
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static deleteAccount(acc_id, body, token){
        return fetch(`${process.env.REACT_APP_API_URL}/whenuneedmeapi/accounts/${acc_id}/`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token${token}`
            }
        })
    }
}

export default API 
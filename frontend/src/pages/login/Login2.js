import React from 'react'
import UserStore from '../../stores/UserStore';
import LoginForm from '../../components/LoginForm';
// import InputFeild from '../../components/InputFeild';
import SubmitButton from '../../components/SubmitButton';
import { observer } from 'mobx-react';
import './login.css';


class Login2 extends React.Component {
    //cookie
    
    async componentDidMount() {
        try{
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();
            if (result && result.success){
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else{
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }
         }
        catch(e){
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    };

    async doLogout() {
        try{
            let res = await fetch('/logut', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();
            if (result && result.success){
                UserStore.isLoggedIn = false;
                UserStore.username = '';
            }
         }
        catch(e){
            console.log(e)
           
        }
    }


    render() {
        if(UserStore.loading){
            return (
                <div className="app">
                    <div className="container">
                        Loading, please wait...
                    </div>
                </div>
            );
        }
        else{
            if(UserStore.isLoggedIn){
                return (
                    <div className="app">
                        <div className="container">
                            Welcome {UserStore.username}

                            <SubmitButton
                                text={'Log out'}
                                disabled={false}
                                onClick={()=> this.doLogout()}
                            />
                        </div>
                    </div>
                );
            }
        return (
            <div className="loginForm">login2
                <div className="container">
                <SubmitButton
                                text={'Log out'}
                                disabled={false}
                                onClick={()=> this.doLogout()}
                            />
                    <LoginForm />
                </div>
            </div>
        );
    }
    }
}

export default observer(Login2);
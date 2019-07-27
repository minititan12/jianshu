import React, { Component } from 'react';
import { LoginWrapper, LoginBox, LoginInput, Button } from './style';
import { connect } from 'react-redux';
import { getAction } from './store';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    render() {
        if (this.props.loginStatus) {
            return <Redirect to="/jianshu"/>
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="账号" ref={(input) => this.account = input} />
                        <LoginInput placeholder="密码" ref={(input) => this.passWord = input} type="password" />
                        <Button onClick={() => { this.props.login(this.account, this.passWord) }}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}

const mapState = (state) => {
    return {
        loginStatus: state.getIn(["login", "login"])
    }
}

const mapDispatch = (dispatch) => {
    return {
        login(account, passWord) {
            dispatch(getAction.login(account.value, passWord.value));
        }
    }
}

export default connect(mapState, mapDispatch)(Login);
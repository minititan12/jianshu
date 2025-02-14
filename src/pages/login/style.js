import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 56px;
    background-color: gray;
    z-index: 0;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    margin: 100px auto;
    padding-top: 40px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const LoginInput = styled.input`
    display: block;
    width: 200px; 
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
`;

export const Button = styled.div`
    width: 220px; 
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    margin: 10px auto;
    color: #fff;
    background-color: #3194d0;
    text-align: center;
    cursor: pointer;
`;
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderMain = styled.div`
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    top: 0;
`;

export const HeaderContain = styled.div`
    width: 1440px;
    height: 56px;
    margin: 0 auto;
    position: relative;
`;

export const Logo = styled.div`
    width: 100px;
    height: 100%;
    margin-right: 140px;
    background: url(${logoPic});
    background-size: contain;
    display: inline-block;
`;

export const Nav = styled.ul`
    width: 960px;
    height: 100%;
    display: inline-block;
`;

export const NavItem = styled.div`
    cursor: pointer;
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    vertical-align: middle;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
    &.highlight{
        color: #ea6f5a;
    }
    .iconfont{
        font-size: 20px;
        vertical-align: middle;
        margin-right: 5px;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    height: 56px;
    position: relative;
`;

export const SearchIcon = styled.div`
    .iconfont{
        position: absolute;
        top: 25%;
        right: 10px;
        font-size: 20px;
        text-align: center;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        color: #999;
    }
    .focused{
        background-color: #777;
        color: white;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 240px;
    height: 38px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    background-color: #eee;
    font-size: 14px;
    margin-top: 9px;
    margin-left: 15px;
    border: none;
    outline: none;
    border-radius: 19px;
    transition: width 0.3s linear; 
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 300px;
        background-color: #eee;
        color: #666;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 15px;
    top: 56px;
    width: 200px;
    padding: 10px 20px;
    background-color: white;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #969696;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SearchInfoSwitch = styled.div`
    font-size: 13px;
    cursor: pointer;
    .iconfont{
        display: inline-block;
        font-size: 13px;
        margin-right: 5px;
        transition: all 0.4s linear;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    cursor: pointer;
    display: block;
    float: left;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0 5px;
    color: #787878;
    margin: 0 10px 12px 0;
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Btn = styled.div`
    cursor: pointer;
    line-height: 24px;
    height: 24px;
    width: 54px;
    text-align: center;
    border: 1px solid #ec6149;
    border-radius: 20px;
    float: right;
    padding: 6px 12px;
    margin: 9px 10px 0 10px;
    &.login{
        color: #ec6149;
    }
    &.article{
        width: 65px;
        color: white;
        background-color: #ea6f5a;
    }
`;

export const ClearFix = styled.div`
    :after{
        content:'';
        height: 0;
        display: block;
        clear: both;
    }
`;
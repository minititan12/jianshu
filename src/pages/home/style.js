import styled from 'styled-components';
import icon1 from '../../statics/1.png';
import icon2 from '../../statics/2.png';
import icon3 from '../../statics/3.png';
import icon4 from '../../statics/4.png';
import QRCode from '../../statics/QRCode.png';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const HomeLeft = styled.div`
    margin: 30px 0 30px 15px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
        margin-bottom: 35px;
        border-radius: 5px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    margin-top: 30px;
`;

export const BoardWrapper = styled.div`
    width: 100%;
    height: 224px;
    padding-bottom: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const BoardItem = styled.a`
    width: 100%;
    margin-bottom: 6px;
    cursor: pointer;
`;

export const BoardImg1 = styled.div`
    width: 280px;
    height: 50px;
    background: url(${icon1});
    background-size: contain;
`;

export const BoardImg2 = styled.div`
    width: 280px;
    height: 50px;
    background: url(${icon2});
    background-size: contain;
`;

export const BoardImg3 = styled.div`
    width: 280px;
    height: 50px;
    background: url(${icon3});
    background-size: contain;
`;

export const BoardImg4 = styled.div`
    width: 280px;
    height: 50px;
    background: url(${icon4});
    background-size: contain;
`;

export const CodeWrapper = styled.div`
    position: relative;
    height: 60px;
    padding: 10px 22px;
    margin-bottom: 30px;
    cursor: pointer;
`;

export const CodeInfo = styled.div`
    width: 143px;
    height: 43px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title{
        margin-top: 7px;
        font-size: 15px;
    }
    .description{
        font-size: 13px;
        margin-top: 4px;
        color: #999;
    }
    .code{
        position: absolute;
        top: -180px;
        left: calc(50% - 90px);
        width: 150px;
        height: 150px;
        padding: 10px;
        border: 1px solid #999;
        border-radius: 5px;
        background-color: white;
    }
    .code-img{
        width: 150px;
        height: 150px;
    }
    .sharp{
        position: absolute;
        bottom: -19px;
        left: calc(50% - 15px);
        border-top: 20px solid #999;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
    }
    .sharp::after{
        content: '';
        position: absolute;
        top: -21px;
        left: -15px;
        border-top: 20px solid white;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
    }
`;

export const CodeImg = styled.div`
        display: inline-block; 
        width: 60px;
        height: 60px;
        vertical-align: middle;
        background: url(${QRCode});
        background-size: contain;
`;

export const ListItem = styled.div`
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #dcdcdc;
    font-size: 13px;
    margin-bottom: 15px;
    .title{
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
    }
    .article{
        line-height: 24px;
        margin-bottom: 8px;
        color: #999;
    }
    .item-img{
        float: right;
        width: 150px;
        height: 100px;
        margin-top: -15px;
    }
`;

export const ListDiscribe = styled.div`
    color: #b4b4b4;
    font-size: 13px;
    line-height:20px;
    .item{
        display: inline-block;
        margin-right: 15px;
    }
    .score{
        color: #ea6f5a;
    }
    .iconfont{
        font-size: 15px;
        line-height:20px;
        vertical-align: middle;
        margin-right: 3px;
    }
    .number{
        vertical-align: middle;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const WriterWrapper = styled.div`
    
`;

export const WriterTitle = styled.div`
    font-size: 14px;
    color: #969696;
    .switch{
        display: inline-block;
        float: right;
        cursor: pointer;
    }
    .iconfont{
        display: inline-block;
        font-size: 14px;
        transition: all 0.4s linear;
        transform-origin: center center;
    }
    .word{
        margin-left: 5px;
    }
    span{
        vertical-align: middle;
    }
`;

export const WriterItem = styled.div`
    margin-top: 15px;
    .item-img{
        cursor: pointer;
        display: inline-block;
        width: 48px;
        height: 48px;
        border: 1px solid rgb(221,221,221);
        border-radius: 24px;
        margin-right: 10px;
        vertical-align: middle;
    }
`;

export const WriterContent = styled.div`
    display: inline-block;
    width: 220px;
    font-size: 14px;
    vertical-align: middle;
    line-height: 20px;
    .up{
        margin-bottom: 2px;
    }
    .down{
        color: #969696;
        font-size: 12px;
    }
    .nickname{
        cursor: pointer;
    }
    .attention{
        cursor: pointer;
        display: inline-block;
        float: right;
        color: #42c02e;
    }
    .word{
        margin-right: 10px;
    }
    span{
        vertical-align: middle;
    }
`;

export const BackTop = styled.div`
    position: fixed;
    font-size: 30px;
    bottom: 100px;
    right: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
    font-weight: 500;
    span{
        vertical-align: middle;
    }
`
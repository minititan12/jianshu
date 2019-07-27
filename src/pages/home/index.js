import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import QRCode from './components/QRCode';
import Board from './components/board';
import List from './components/list';
import Writer from './components/writer';

class Home extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            show: false
        }
        this.changeScrollTopShow = this.changeScrollTopShow.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll',this.changeScrollTopShow)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.changeScrollTopShow)
    }

    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 200){
            this.setState({
                show: true
            })
        }else{
            this.setState({
                show: false
            })
        }
    }

    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="banner-img" className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Board />
                    <QRCode />
                    <Writer />
                </HomeRight>
                {this.state.show?(<BackTop onClick={this.handleScrollTop}><span>^</span></BackTop>): null}
            </HomeWrapper>
        )
    }
}

export default Home;
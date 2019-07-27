import React, { PureComponent } from 'react';
import { WriterWrapper, WriterTitle, WriterItem, WriterContent } from '../style';
import { connect } from 'react-redux';
import { getAction } from '../store';

class Writer extends PureComponent {

    componentDidMount() {
        this.props.getWriterList();
    }

    setWriterList(writerList, page) {
        let newList = [];
        for (var i = (page - 1) * 5; i < page * 5; i++) {
            if (writerList[i]) {
                newList.push(
                    <WriterItem key={writerList[i].nickname}>
                        <img alt="item-img" className="item-img" src={writerList[i].avatar_source} />
                        <WriterContent>
                            <div className="up">
                                <span className="nickname">{writerList[i].nickname}</span>
                                <div className="attention">
                                    <span>+关注</span>
                                </div>
                            </div>
                            <div className="down">
                                <span className="word">写了{(writerList[i].total_wordage / 1000).toFixed(1)}k字</span>
                                <span className="like">{(writerList[i].total_likes_count / 1000).toFixed(1)}k喜欢</span>
                            </div>
                        </WriterContent>
                    </WriterItem>
                )
            }
        }

        return newList;
    }

    render() {
        const { switchWriterPage, writerList, writerPage, writerTotalPage,switchIcon } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <div className="switch" onClick={() => { 
                            switchWriterPage(writerTotalPage, writerPage); 
                            switchIcon(this.icon);
                    }}>
                        <span ref={(icon) => { this.icon = icon }} className="iconfont">&#xe600;</span>
                        <span className="word">换一批</span>
                    </div>
                </WriterTitle>
                {this.setWriterList(writerList, writerPage)}
            </WriterWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        writerList: state.getIn(["home", "writerList"]).toJS(),
        writerPage: state.getIn(["home", "writerPage"]),
        writerTotalPage: state.getIn(["home", "writerTotalPage"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWriterList() {
            dispatch(getAction.getWriteList());
        },
        switchIcon(icon){
            let angle = icon.style.transform
            if(angle){
                angle = parseInt(angle.replace(/[^0-9]/ig,""));
            }else{
                angle = 0;
            }
            icon.style.transform = "rotate("+(angle + 360)+"deg)";
        },
        switchWriterPage(totalPage, page) {
            let newPage = page;
            if (page === totalPage) {
                newPage = 1;
            } else {
                newPage++;
            }
            dispatch(getAction.switchWriterPage(newPage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer);
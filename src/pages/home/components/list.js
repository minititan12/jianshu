import React, { PureComponent } from 'react';
import { LoadMore, ListItem, ListDiscribe } from '../style';
import { connect } from 'react-redux';
import { getAction } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    componentDidMount() {
        this.props.getList();
    }

    render() {
        let list = this.props.list.toJS();
        return (
            <>
                {list.map((item, index) => {
                    return (
                        <Link key={index} to={"/detail/"+item.id}>
                            <ListItem>
                                <div className="title">{item.title}</div>
                                <p className="article">
                                    {item.img ? (<img className="item-img" alt="item-img" src={item.img} />) : ""}
                                    {item.content}
                                </p>
                                <ListDiscribe>
                                    <div className="item score">
                                        <span className="iconfont">&#xe601;</span>
                                        <span className="number">{item.score}</span>
                                    </div>
                                    <div className="item"><span className="number">{item.author}</span></div>
                                    <div className="item">
                                        <span className="iconfont">&#xe61d;</span>
                                        <span className="number">{item.comment}</span>
                                    </div>
                                    <div className="item">
                                        <span className="iconfont">&#xe65c;</span>
                                        <span className="number">{item.like}</span>
                                    </div>
                                </ListDiscribe>
                            </ListItem>
                        </Link>
                    )
                })}
                <LoadMore onClick={() => { this.props.getMoreList(this.props.page) }}>
                    阅读更多
                </LoadMore>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList() {
            dispatch(getAction.getArticleList());
        },
        getMoreList(page) {
            dispatch(getAction.getMoreList(page + 1));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
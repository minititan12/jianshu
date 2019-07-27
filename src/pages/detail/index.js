import React, { Component } from 'react';
import { DetailWrapper, Title, Content } from './style';
import { connect } from 'react-redux';
import { getAction } from './store';

class Detail extends Component {
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }

    render() {
        return (
            <DetailWrapper>
                <Title>{this.props.title}</Title>
                <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
            </DetailWrapper>
        )
    }
}

const mapState = (state) => {
    return {
        title: state.getIn(["detail", "title"]),
        content: state.getIn(["detail", "content"])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(getAction.getDetail(id));
        }
    }
}

export default connect(mapState, mapDispatch)(Detail);
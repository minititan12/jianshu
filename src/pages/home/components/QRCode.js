import React, { PureComponent } from 'react';
import { CodeWrapper, CodeInfo } from '../style';
import { connect } from 'react-redux';
import { getAction } from '../store'

class QRCode extends PureComponent {

    showCode(){
        if(this.props.codeMouseIn){
            return (
                <div className="code">
                    <img alt="code-img" className="code-img" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
                    <div className="sharp"></div>
                </div>
            )
        }else{
            return null;
        }
    }

    render() {
        const { handleCodeMouseEnter, handleCodeMouseLeave } = this.props;
        return (
            <CodeWrapper
                onMouseEnter={handleCodeMouseEnter}
                onMouseLeave={handleCodeMouseLeave}
            >
                <img alt="code-img" className="code-img" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                <CodeInfo>
                    <div className="title">
                        下载简书手机App
                        <span className="iconfont">&#xe683;</span>
                    </div>
                    <div className="description">
                        随时随地发现和创作内容
                    </div>
                    {this.showCode()}
                </CodeInfo>
            </CodeWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        codeMouseIn: state.getIn(["home", "codeMouseIn"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCodeMouseEnter() {
            dispatch(getAction.getCodeMouseEnterAction());
        },
        handleCodeMouseLeave() {
            dispatch(getAction.getCodeMouseLeaveAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QRCode);
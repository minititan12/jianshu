import React, { Component } from 'react';
import { getAction } from './store';
import { SearchInfoList, SearchInfoItem, SearchIcon, SearchInfoSwitch, SearchInfoTitle, SearchInfo, Btn, Addition, NavSearch, NavItem, HeaderMain, HeaderContain, Logo, Nav, ClearFix, SearchWrapper } from './style.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAction as loginGetAction } from '../../pages/login/store';

class Header extends Component {

  mapHeaderList(list, page) {
    var newList = list.toJS();
    var pageList = [];
    for (var i = (page - 1) * 10; i < page * 10; i++) {
      if (newList[i]) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    return pageList;
  }

  getListInfo() {
    const { page, totalPage, mouseIn, focused, list, switchSearchInfo, handleMouseEnter, handleMouseLeave } = this.props;
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { switchSearchInfo(page, totalPage, this.spinIcon) }}>
              <span ref={(icon) => { this.spinIcon = icon }} className="iconfont">&#xe600;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.mapHeaderList(list, page)}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { list, focused, handleInputFocus, handleInputBlur, login, logout } = this.props;

    return (
      <HeaderMain>
        <HeaderContain>
          <Link to="/jianshu">
            <Logo />
          </Link>

          <Nav>
            <Link to="/jianshu">
              <NavItem className="left active">
                <span className="iconfont">&#xe7d7;</span>首页
              </NavItem>
            </Link>

            <NavItem className="left">
              <span className="iconfont">&#xe618;</span>下载App
            </NavItem>

            {login ?
              <NavItem onClick={logout} className="right">退出</NavItem> :
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
            }


            <NavItem className="right bigger">
              <span className="iconfont">&#xe636;</span>
            </NavItem>

            <SearchWrapper>
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}
              />

              <SearchIcon>
                <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</span>
              </SearchIcon>

              {this.getListInfo()}
            </SearchWrapper>
          </Nav>

          <Addition>
            <Link to="/write">
              <Btn className="article">
                <span className="iconfont">&#xe7c8;</span>写文章
              </Btn>
            </Link>
            <Btn className="login">注册</Btn>
          </Addition>
        </HeaderContain>
        <ClearFix />
      </HeaderMain>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //state.get('header').get('focused')也可以
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      if (list.size === 0) {
        dispatch(getAction.getListData());
      }
      dispatch(getAction.getInputFocusAction());
    },

    handleInputBlur: () => {
      dispatch(getAction.getInputBlurAction());
    },

    switchSearchInfo: (page, totalPage, spinIcon) => {
      var newpage = page;
      if (page < totalPage) {
        newpage++;
      } else {
        newpage = 1;
      }
      var originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      dispatch(getAction.getSwitchInfoAction(newpage));
    },

    handleMouseEnter: () => {
      dispatch(getAction.getMouseEnterAction());
    },

    handleMouseLeave: () => {
      dispatch(getAction.getMouseLeaveAction());
    },
    logout() {
      dispatch(loginGetAction.logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
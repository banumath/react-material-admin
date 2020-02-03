/**
 *
 * AppLayout
 *
 */

import React from 'react';
import { Content, Header, Nav, Root } from 'mui-layout';
import { ChevronLeft, ChevronRight, MenuRounded } from '@material-ui/icons';
import Sidebar from 'components/Sidebar';
import HeaderContent from 'components/Header';
import PropTypes from 'prop-types';
import { defaultNavigationConfig } from '../../containers/App/constants';
import { useDrawerStyles, useHeaderStyles } from './styles';
// import styled from 'styled-components';

function AppLayout({ children }) {
  const { header: headerCss, content: contentCss } = useHeaderStyles();
  const drawerStyles = useDrawerStyles();
  return (
    <Root config={defaultNavigationConfig}>
      <Header
        classes={{ root: headerCss }}
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      >
        {({ screen, collapsed }) => (
          <HeaderContent screen={screen} collapsed={collapsed.toString()} />
        )}
      </Header>
      <Nav
        classes={drawerStyles}
        renderIcon={collapsed =>
          collapsed ? <ChevronRight /> : <ChevronLeft />
        }
      >
        <Sidebar />
      </Nav>
      <Content classes={{ root: contentCss }}>{children}</Content>
    </Root>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;

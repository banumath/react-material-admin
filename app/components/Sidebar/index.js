/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, ListItemText } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { menu } from './menu';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    overflowX: 'hidden',
    padding: 7,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    overflowX: 'hidden',
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const Sidebar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {menu.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>
              <Icon>{page.icon}</Icon>
            </div>
            <ListItemText
              primary={page.title}
              primaryTypographyProps={{ noWrap: true, variant: 'subtitle2' }}
            />
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;

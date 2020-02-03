export const styles = ({
  spacing,
  transitions,
  breakpoints,
  palette,
  shape,
}) => ({
  paper: {
    padding: 20,
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    '&:hover': {
      background: palette.grey[300],
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  formField: {
    marginBottom: 20,
  },
  formTitle: {
    paddingTop: 20,
    textAlign: 'center',
  },
  loginForm: {
    padding: 20,
  },
  logoWrapper: {
    textAlign: 'center',
  },
  logo: {
    maxWidth: 170,
    paddingLeft: 0,
    paddingRight: 10,
  },
});

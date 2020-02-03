import { makeStyles } from '@material-ui/styles';

export const useHeaderStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#fff !important',
    boxShadow: '0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04)',
  },
  content: {
    backgroundColor: '#f8f8f8',
  },
}));

export const useDrawerStyles = makeStyles(() => ({
  paper: {
    border: 'none',
    boxShadow: '0 0 8px 0 rgba(0,0,0,0.38)',
    overflowX: 'hidden',
  },
}));

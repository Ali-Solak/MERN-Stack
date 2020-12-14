import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393e46',
    opacity: '85%',
  },
  heading: {
    color: '#01e7f4',
  },
  image: {
    marginLeft: '15px',
  },

  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: "column-reverse",
    }
  }
}));
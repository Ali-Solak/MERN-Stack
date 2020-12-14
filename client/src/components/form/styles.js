import { makeStyles, withTheme } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: "50px",
    background: '#393e46',
    boxShadow: '-20px -20px 0px #3f444d',
  },
  form: {
    display: 'flex',
    color: '#01e7f4',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    color: '#01e7f4',
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    
  },
  textfield: {
    '& .MuiInputLabel-formControl': {
      color: '#01e7f4',
    },
    '& .MuiInputBase-root': {
      color: '#01e7f4',
    },
    '& label.Mui-focused': {
      color: '#01e7f4',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#01e7f4',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#01e7f4',
      },
      '&:hover fieldset': {
        borderColor: '#01e7f4',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#01e7f4',
      },
    },
  }
}));
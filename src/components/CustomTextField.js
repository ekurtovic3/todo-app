import { TextField } from '@material-ui/core';
import styled from 'styled-components'
const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'orange',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'orange',
    },
    "& .MuiFormLabel-root": {
      color: "orange"
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'orange',
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '& fieldset:after': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
      },
      '&.Mui fieldset': {
        borderColor: 'orange',
      },
      input: {
        color: 'orange'
      }
    },
  });
   export default CustomTextField
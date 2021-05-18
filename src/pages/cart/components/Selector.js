import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const sizes = [
    "S","M","L","XL"
]

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({id,size,setsize}) {
  const classes = useStyles();

  const handleChange = (event) => {
      console.log("VALUEE",event.target.value)
    const name = event.target.name;
    setsize(id,event.target.value);
  };

  return (
    <div>
        <Select
          native
          value={size}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          {sizes.map(s=><option value={s}>{s}</option>)}
        </Select>
    </div>
  );
}

import { TextField } from '@mui/material'
import React from 'react'

function TextFieldCustom({ value, setValue, label, handleOnBlur=null }) {
  return (
    <TextField
        sx={{
            "& .MuiFormLabel-root" : {
            color: "white"
            },
            "&:hover .MuiFormLabel-root" : {
            color: "orange"
            },
            "&:focus .MuiFormLabel-root" : {
            color: "orange"
            },
            "& .MuiOutlinedInput-notchedOutline" :{
            borderColor: "white"
            },
            "&:hover .MuiOutlinedInput-notchedOutline" :{
            borderColor: "orange"
            },
            "& .MuiInputBase-root" : {
              color: "white"
            }
        }} 
        id="outlined-basic" 
        color="warning" 
        label={label} 
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          if(handleOnBlur) {
            handleOnBlur();
          }
        }}
        fullWidth 
        required
    />
  )
}

export default TextFieldCustom
import React from 'react'
import { Grid, TextField } from '@mui/material'

const Form = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
      >
        <Grid item xs={8}>
          <TextField label="Outlined" variant="filled" sx={{
            '& .MuiFilledInput-root': { backgroundColor: '#fff' }
          }}/>
        </Grid>
        <Grid item xs={4}>
          <TextField label="Outlined" variant="outlined" sx={{
            '& .MuiFilledInput-root': { backgroundColor: '#fff' }
          }}/>
        </Grid>
        <div>
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Outlined" variant="filled" />
        </div>
        <div>
          <TextField label="Outlined" variant="outlined" />
          <TextField label="Outlined" variant="filled" />
        </div>
      </Grid>
    </>
  )
}

export default Form

import React from 'react'
import { Button, Grid, TextField, Select, SelectChangeEvent, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import * as MIcon from '@mui/icons-material'
import { useState } from 'react'

const Form = () => {
  const [isLoading, setLoading] = useState(false)
  const [age, setAge] = useState('')
  const commCode = {
    age: [
      {
        codeName: 10,
        markName: 'Ten'
      },
      {
        codeName: 20,
        markName: 'Twenty'
      },
      {
        codeName: 30,
        markName: 'Thirty'
      }
    ]
  }
  return (
    <>
      <div className="title-row">
        <label>P15EN60018</label>
        <div className="title-row__button-area">
          <LoadingButton variant="contained" endIcon={<MIcon.Save/>} loading={isLoading} onClick={() => setLoading(true)}>Save</LoadingButton>
          <Button variant="contained" endIcon={<MIcon.Send/>}>Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
      </div>
      <div className="form-area">
        <Grid
          container
          direction="row"
        >
          <Grid container columns={24} spacing={1}>
            <Grid item xs={6}>
              <TextField label="Normal" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField required label="Required" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField disabled label="Disabled" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextField type="password" autoComplete="new-password" label="Password" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container columns={24} spacing={1}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={(e: SelectChangeEvent) => {
                    setAge(e.target.value)
                  }}
                >
                  {
                    commCode.age.map(item => <MenuItem value={item.codeName}>{item.markName}</MenuItem>)
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Form
function setState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.')
}


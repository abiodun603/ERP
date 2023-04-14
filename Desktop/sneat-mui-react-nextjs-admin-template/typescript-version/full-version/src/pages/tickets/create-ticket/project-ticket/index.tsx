// ** React Imports
import React, { ChangeEvent, FormEvent, RefAttributes, forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Radio from '@mui/material/Radio'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Icon Imports

const CustomInput: React.ForwardRefExoticComponent<RefAttributes<any>> | any = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [value, setValue] = useState<string>('')
  const [date, setDate] = useState<DateType>(null)
  const [error, setError] = useState<boolean>(false)
  const [helperText, setHelperText] = useState<string>('Choose wisely')

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setHelperText(' ')
    setValue((event.target as HTMLInputElement).value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (value === 'best') {
      setError(false)
      setHelperText('You got it!')
    } else if (value === 'worst') {
      setError(true)
      setHelperText('Sorry, wrong answer!')
    } else {
      setError(true)
      setHelperText('Please select an option.')
    }
  }

  return (
    <Card>
      <CardHeader title='Project Ticket  Dashboard/Project Ticket' />
      <Divider sx={{ m: '0 !important' }} />
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                Subject
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Title
              </InputLabel>
              <TextField fullWidth placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Who is Responsible?
              </InputLabel>
              <TextField fullWidth placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Email address
              </InputLabel>
              <TextField fullWidth placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Incident Type{' '}
              </InputLabel>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                  Select{' '}
                </InputLabel>
                <Select
                  label='Incident'
                  defaultValue=''
                  placeholder='Select'
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Date{' '}
              </InputLabel>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput label='Pick Date' />}
                id='form-layouts-separator-date'
                onChange={(date: Date) => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Priority{' '}
              </InputLabel>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                  Select{' '}
                </InputLabel>
                <Select
                  label='Priority'
                  placeholder='Select'
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Project{' '}
              </InputLabel>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                  Select{' '}
                </InputLabel>
                <Select
                  label='Priority'
                  placeholder='Select'
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <RadioGroup aria-label='quiz' name='quiz' value={value} onChange={handleRadioChange}>
                <FormControlLabel value='best' control={<Radio />} label='Private- Only project users can access' />
                <FormControlLabel value='worst' control={<Radio />} label='Public- Portal users can viewflow' />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Overview
              </InputLabel>
              <TextField
                fullWidth
                multiline
                minRows={3}
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

const ProjectTicket = () => {
  return (
    <DatePickerWrapper>
      <Grid item xs={12}>
        <FormLayoutsSeparator />
      </Grid>
    </DatePickerWrapper>
  )
}

export default ProjectTicket

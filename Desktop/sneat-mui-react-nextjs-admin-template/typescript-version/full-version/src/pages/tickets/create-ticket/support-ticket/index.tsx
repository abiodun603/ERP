// ** React Imports

// ** MUI Imports
import Card from '@mui/material/Card'
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

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

const defaultValues = {
  title: '',
  name: '',
  email: '',
  phone: '',
  priority: '',
  overview: ''
}

const FormLayoutsSeparator = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    mode: 'onChange'
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Card>
      <CardHeader title='Support Ticket  Dashboard/Support Ticket' />
      <Divider sx={{ m: '0 !important' }} />
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
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
              <Controller
                name='title'
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField fullWidth placeholder='' value={value} onBlur={onBlur} onChange={onChange} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Reporter’s Name
              </InputLabel>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                  Select
                </InputLabel>
                <Controller
                  name='name'
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label='Priority'
                      placeholder='Select'
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      onChange={onChange}
                      value={value}
                    >
                      <MenuItem value='UK'>UK</MenuItem>
                      <MenuItem value='USA'>USA</MenuItem>
                      <MenuItem value='Australia'>Australia</MenuItem>
                      <MenuItem value='Germany'>Germany</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Reporter’s Email
              </InputLabel>
              <Controller
                name='email'
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField type='email' fullWidth placeholder='' value={value} onBlur={onBlur} onChange={onChange} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Reporter’s Phone Number
              </InputLabel>
              <Controller
                name='phone'
                control={control}
                render={({ field: { value, onChange, onBlur } }) => (
                  <TextField fullWidth placeholder='' value={value} onBlur={onBlur} onChange={onChange} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Who is Responsible?
              </InputLabel>
              <TextField fullWidth placeholder='' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Priority{' '}
              </InputLabel>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                  Select{' '}
                </InputLabel>
                <Controller
                  name='priority'
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      label='Priority'
                      placeholder='Select'
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      onChange={onChange}
                      value={value}
                    >
                      <MenuItem value='UK'>UK</MenuItem>
                      <MenuItem value='USA'>USA</MenuItem>
                      <MenuItem value='Australia'>Australia</MenuItem>
                      <MenuItem value='Germany'>Germany</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel id='form-layouts-separator-select-label' sx={{ mb: 3 }}>
                Overview
              </InputLabel>
              <Controller
                name='overview'
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    multiline
                    minRows={3}
                    sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                    onChange={onChange}
                    value={value}
                  />
                )}
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

const SupportTicket = () => {
  return (
    <DatePickerWrapper>
      <Grid item xs={12}>
        <FormLayoutsSeparator />
      </Grid>
    </DatePickerWrapper>
  )
}

export default SupportTicket

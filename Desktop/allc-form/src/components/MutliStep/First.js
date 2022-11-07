import React from 'react'
import { useForm } from 'react-hook-form';
import { Label } from '../../styles/formcomponent.style';
import { TextField } from '../shared/FormComponent';

const First = () => {
  const { handleSubmit, errors, formState, register } = useForm({
    mode: 'onChange',
  });
  return (
    <div className='w-full'>
      {/* divider */}
      <div className='w-full h-10 bg-slate-500'></div>
      <div>
        <TextField
          label="1. What is the name of the Company being Rated?"
          name="date"
          type="text"
          placeholder=""
          required={true}
          className = "md:ml-3"
          {...register('date', { required: true })}
        />
      </div>

      <div className='my-4'>
        <Label>2. Why are you taking this Performance Assessment</Label>
        <div role="radiogroup" className="space-y-4 mt-3">
          <div className="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">At the Request of Lyft</label>
          </div>

          <div className="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">At the Request of Another Buyer</label>
          </div>
          <div className="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Self Assessment</label>
          </div>
        </div>
      </div>
    
      <div>
        <TextField
          label="3. What is Your Name?"
          name="date"
          type="text"
          placeholder=""
          required={true}
          className = " md:ml-3"
          {...register('date', { required: true })}
        />
      </div>

      <div>
        <TextField
          label="4. What is the Email of the Person we will contact regarding the results of the Assessment?"
          name="date"
          type="text"
          placeholder=""
          required={true}
          className = " md:ml-3"
          {...register('date', { required: true })}
        />
      </div>

      <div>
        <TextField
          label="5. Provide search words that will help us find you. For examele : call center, software development, staffing etc. please make sure to use any unique capabilities."
          name="date"
          type="text"
          placeholder=""
          required={true}
          className = "md:ml-3"
          {...register('date', { required: true })}
        />
      </div>

      <div>
        <TextField
          label="6. What is Your Primary NAICS code. If you don't know it put i don't Know."
          name="date"
          type="text"
          placeholder=""
          required={true}
          className = " md:ml-3"
          {...register('date', { required: true })}
        />
      </div>
    </div>
  )
}

export default First
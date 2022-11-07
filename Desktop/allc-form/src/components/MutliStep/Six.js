import React from 'react'
import { useForm } from 'react-hook-form';
import { Label } from '../../styles/formcomponent.style';

const Six = () => {
  const { handleSubmit, errors, formState, register } = useForm({
    mode: 'onChange',
  });
  return (
    <div>
    {/* divider */}
    <div className='w-full h-10 bg-slate-500 flex items-center'>
      <h2 className='text-white pl-4 font-normal'>GOVERNMENT SUITABILITY</h2>
    </div>
    
    <div className='my-4'>
      <Label>28. Past Performance (PP)</Label>
      <div class="flex ml-6 mt-3">
        <div className='space-y-2'>
          <div class="form-check">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
              We have greater than 3 Past Performances within 3 Years in Federal Sales as a Prime
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
              We have at least  3 Past Performances within 3 Years in Federal Sales as a Subcontractor
            </label>
          </div>
          <div class="form-check I don't know">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
              We have no past Performance within 3 years as a Prime or  subcontractor in Federal Sales
            </label>
          </div>
          <div class="form-check">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
              Other (please specify)
            </label>
          </div>
        </div>
      </div>
    </div>

    <div className='my-4'>
      <Label>29. OCONUS (Other than Continental US)</Label>
      <h2>Do you have OCONUS experience within 5 years?</h2>
      <div class="flex ml-6 mt-3">
        <div className='space-y-2'>
          <div class="form-check">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
             More than 15
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
             More than 5 Less than 10
            </label>
          </div>
          <div class="form-check I don't know">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
              1 - 5
            </label>
          </div>
          <div class="form-check">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
              None
            </label>
          </div>  
        </div>
      </div>
    </div>

    <div className='my-4'>
      <Label>30. DCAA</Label>
      <h2>Choose the best Answer</h2>
      <div role="radiogroup" className="space-y-4 mt-3">
     
        <div class="flex items-center ml-6">
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
            <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
          </div>
          <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Audited with negative Results</label>
        </div>
        <div class="flex items-center ml-6">
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
            <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
          </div>
          <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Never been Audited</label>
        </div>

        <div class="flex items-center ml-6">
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
            <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
          </div>
          <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Prepared to Achieve Pre-Award Adequacy</label>
        </div>
        <div class="flex items-center ml-6">
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
            <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
          </div>
          <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Pre-Award Adequacy Determination</label>
        </div>

        <div class="flex items-center ml-6">
          <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
            <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
            <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
          </div>
          <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">I don't know what this is.</label>
        </div>
      </div>
    </div>

    <div className='my-4'>
      <Label>31. What Facility Clearance do you Have.  Select all that apply</Label>
      <div class="flex ml-6 mt-3">
        <div className='space-y-2'>
          <div class="form-check">
            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
             Top Secret
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
             Secret
            </label>
          </div> 
        </div>
      </div>
    </div>

    <div className='my-4'>
      <Label>32. Please list any Certifications/Industry Quality Standards (i.e ISO, CMMI, etc)
        that your currently have or anything that you believe is a key discrimminator</Label>
      <div>
        <textarea className="border resize mt-3 ml-6" cols="34" rows="5"></textarea>
      </div>
    </div>

  </div>
  )
}

export default Six
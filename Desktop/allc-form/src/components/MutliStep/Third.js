import React from 'react'
import { useForm } from 'react-hook-form';
import { Label } from '../../styles/formcomponent.style';

const Third = () => {
  const { handleSubmit, errors, formState, register } = useForm({
    mode: 'onChange',
  });
  return (
    <div>
      {/* divider */}
      <div className='w-full h-10 bg-slate-500 flex items-center'>
        <h2 className='text-white pl-4 font-normal'>Getting to Know You</h2>
      </div>

      <div className='my-4'>
        <Label>11. Tell us About Your Business. What type of business is being rated? Select all that apply</Label>
        <div class="flex ml-6 mt-3">
          <div className='space-y-2'>
            <div class="form-check">
              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
                Manufacturing
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Services
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Technology (Services)
              </label>
            </div>
            <div class="form-check">
              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
                Technology (Products)
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Construction
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Other
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>13. Where is it located?</Label>
        <div class="flex items-center space-x-10 mt-4">
          <div class="text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">
            <h2 class="block text-gray-500 md:mb-0 pr-4" for="inline-full-name">
              State/Province
            </h2>
          </div>
          <div class="w-[200px]">
            <input class=" border-2   w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-full-name" type="text" />
          </div>
        </div>
        <div class="flex items-center space-x-10 mt-4">
          <div class="text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">
            <h2 class="block text-gray-500 md:mb-0 pr-4" for="inline-full-name">
              Country
            </h2>
          </div>
          <div class="w-[200px]">
            <input class=" border-2   w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white " id="inline-full-name" type="text" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third
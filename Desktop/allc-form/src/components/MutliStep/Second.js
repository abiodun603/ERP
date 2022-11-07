import React from 'react'
import { useForm } from 'react-hook-form';
import { Label } from '../../styles/formcomponent.style'

const Second = () => {
  const { handleSubmit, errors, formState, register } = useForm({
    mode: 'onChange',
  });
  return (
      <div>
          {/* divider */}
        <div className='w-full h-10 bg-slate-500 flex items-center'>
          <h2 className='text-white pl-4 font-normal'>Diversity and Inclusion</h2>
        </div>

        <div className='my-4'>
          <Label>7. What percentage of your WORKFORCE is Arican American</Label>
          <div role="radiogroup" className="space-y-4 mt-3">
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>
          </div>
        </div>
        <div className='my-4'>
          <Label>8. What percentage of your WORKFORCE is minority, woman, lgbt, veterran, or hubzone owed?</Label>
          <div role="radiogroup" className="space-y-4 mt-3">
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>
          </div>
        </div>

        <div className='my-4'>
          <Label>9. What percentage of your SPEND (suppliers) is Afican American</Label>
          <div role="radiogroup" className="space-y-4 mt-3">
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>
          </div>
        </div>

        <div className='my-4'>
          <Label>10. What percentage of your SPEND (suppliers) is minority, woman, lgbt, veteran, or hubzone ownned?</Label>
          <div role="radiogroup" className="space-y-4 mt-3">
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5%</label>
            </div>
            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>

            <div className="flex items-center ml-6">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
                <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
              </div>
              <label id="label2" className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 20%</label>
            </div>
          </div>
        </div>

        <div className='my-4'>
          <Label>11. How positioned are you in Underserved Communities</Label>
          <div className="flex ml-6 mt-3">
            <div className='space-y-2'>
              <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" htmlFor="flexCheckDefault">
                  I am located in a under utilized community (hubzone, opportunity zone, Empowerment cities etc)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" htmlFor="flexCheckChecked">
                  I am a CERTIFIED HUBZONE business
                </label>
              </div>
              <div className="form-check I don't know">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" htmlFor="flexCheckChecked">
                  I dont know
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Second
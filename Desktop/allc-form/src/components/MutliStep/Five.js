import React from 'react'
import { Label } from '../../styles/formcomponent.style'

const Five = () => {
  return (
    <div>
      {/* divider */}
      <div className='w-full h-10 bg-slate-500 flex items-center'>
        <h2 className='text-white pl-4 font-normal'>TEAMING SUITABILITY</h2>
      </div>
      
      <div className='my-4'>
        <Label>22. Tell us About Your Business. What type of business is being rated? Select all that apply</Label>
        <div class="flex ml-6 mt-3">
          <div className='space-y-2'>
            <div class="form-check">
              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
                Local Small Business
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Local Minority (city, country)
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Local Female (city, country)
              </label>
            </div>
            <div class="form-check">
              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
                Local Veteran
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                State Minority
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                State Female
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Federal Minority (8a)
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Federal Service Disabled Veteran
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Federal Veteran
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Federal Woman Owned
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Federal Woman Owned Certified
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                ANC (Alaskan Native Corporation)
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Federal Hubzone Certified
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                GSA Schedule 70
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                GSA Schedule PSS (Mobis)
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                GSA Schedule PSS (871)
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Eagle
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                8a STARS
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                CIMMS
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                Other IDIO
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>23. How many Sole Source Contracts Have You Had?</Label>
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
        <Label>24. How Often has a customer (or potential customer) requested your assistance on a Scope of Work/PWS</Label>
        <div class="flex ml-6 mt-3">
          <div className='space-y-2'>
            <div class="form-check">
              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
                Often
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-7800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                At least Once
              </label>
            </div>
            <div class="form-check I don't know">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckChecked">
                That has Never Happened but we communicate Often
              </label>
            </div>
            <div class="form-check">
              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label inline-block ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100" for="flexCheckDefault">
                That Has Never Happened
              </label>
            </div>  
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>25. How Often do you Communicate with Customer</Label>
        <div role="radiogroup" className="space-y-4 mt-3">
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">I Communicate Monthly</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">I Communicate Quarterly</label>
          </div>
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">I Communicate less than twice a Year</label>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>26. Revenues</Label>
        <h2>What are your 3 year Averaged Revenues</h2>
        <div role="radiogroup" className="space-y-4 mt-3">
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 10M</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5 Million but less than 10 Million</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 1 Million but less than 5 Million</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Less than 1 Million</label>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>27. Capacity</Label>
        <h2>What is Largest Single Award Contract Value</h2>
        <div role="radiogroup" className="space-y-4 mt-3">
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 10M</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5 Million but less than 10 Million</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 1 Million but less than 5 Million</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Less than 1 Million</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Five
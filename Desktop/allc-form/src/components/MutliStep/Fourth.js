import React from 'react'
import { Label } from '../../styles/formcomponent.style'

const Fourth = () => {
  return (
    <div>
      {/* divider */}
      <div className='w-full h-10 bg-slate-500 flex items-center'>
        <h2 className='text-white pl-4 font-normal'>TECHNICAL SUITABILITY</h2>
      </div>
      

      <div className='my-4'>
        <Label>15. Corportate Experience</Label>
        <h4>How long have you been in business (defined as generating revenues and evidenced by tax returns)?</h4>
        <div role="radiogroup" className="space-y-4 mt-3">
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Less than two years</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 2 years but less than 5</label>
          </div>
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 5 years but less than 10</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Greater than 10 Years</label>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>16. Key Personnel</Label>
        
      </div>

      <div className='my-4'>
        <Label>17. Key Personnel Government</Label>
        
      </div>

      <div className='my-4'>
        <Label>18. Please select the scenario that best represents how you Price most OFTEN</Label>
        <div role="radiogroup" className="space-y-4 mt-3">
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">We currently use a Price/Cost Narrative that predefines our indirect costs</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">We use the "price to beat" method(we bid lower than market or incumbent)</label>
          </div>
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">We typically use market pricing</label>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>20. Facilities</Label>
        <div role="radiogroup" className="space-y-4 mt-3">
          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Own</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">Lease</label>
          </div>

          <div class="flex items-center ml-6">
            <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input aria-labelledby="label2" type="radio" name="radio" className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" />
              <div className="check-icon hidden border-4 border-gray-700 rounded-full w-full h-full z-1"></div>
            </div>
            <label id="label2" class="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-100">I have a home office</label>
          </div>
        </div>
      </div>

      <div className='my-4'>
        <Label>21. How many staff, including independent contractors do you have?</Label>
      </div>
    
    </div>

  )
}

export default Fourth
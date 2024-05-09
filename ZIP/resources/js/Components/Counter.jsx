import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/productImageSlice'
import { MinusIcon } from '@heroicons/react/24/outline'
import { TbMinus } from 'react-icons/tb'
import { TbPlus } from 'react-icons/tb'

export function Counter() {
  const count = useSelector((state) => state.productCounter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className=' flex items-center space-x-3 border border-neutral-400 rounded-md w-fit'>
        <button
        className='border flex items-center justify-center hover:bg-neutral-100 border-r-neutral-400 rounded-md w-8 h-7 '
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <TbPlus/>
        </button>
        <span>{count}</span>
        <button
        className='border flex items-center justify-center hover:bg-neutral-100 border-l-neutral-400 rounded-md w-8 h-7 '
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <TbMinus/>
        </button>
      </div>
    </div>
  )
}

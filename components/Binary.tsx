import React, { FC, useState } from 'react'
import { Props } from '../types/type'

const Binary: FC<Props> = ({ setDecimal }) => {

    const [ binaryVal, setBinaryVal ] = useState('')
    const includebinaryNums = ['0', '1']

    const binaryToDecimal = () => {
        const checkArray = binaryVal.split('')

        for(let i = 0;i < checkArray.length;i++) {
            const result = checkArray[i] !== includebinaryNums[0] && checkArray[i] !== includebinaryNums[1];
            if(result) {
                setDecimal('')
                return
            } else {
                setDecimal(parseInt(binaryVal, 2).toString())
            }
        }
    }

  return (
    <div className='binary flex mb-3 mt-3 justify-center items-center'>
        <label className='text-lg' htmlFor='binary'>2進数: </label>
        <input
        id='binary'
        className='mr-2 ml-2 h-10 text-xl border-2 border-black rounded-2xl p-2'
        type="number"
        value={binaryVal}
        onChange={(e) => setBinaryVal(e.currentTarget.value)}
        placeholder='2進数を入力'
        />
        <button className='border-2 border-black bg-slate-500 text-white rounded-3xl p-1 w-20 h-10 hover:scale-110' onClick={() => binaryToDecimal()}>変換</button>
    </div>
  )
}

export default Binary
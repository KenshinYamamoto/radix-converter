import React, { FC, useState } from 'react'
import Binary from '../../components/Binary'
import Decimal from '../../components/Decimal'
import Hex from '../../components/Hex'
import Octal from '../../components/Octal'
import { AiFillCheckCircle } from 'react-icons/ai'
import Link from 'next/link'
import Head from 'next/head'

const Converter: FC = () => {
    const [ decimal, setDecimal ] = useState('')
    const decimalNum = 0

    const convert = (to: number) => {
        const decimalNum = parseInt(decimal)
        return decimalNum.toString(to).toUpperCase()
    }

  return (
    <div className='text-center mt-16'>
        <Head>
            <title>Radix Conversion</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <p className='text-3xl'>※負の数には対応していません</p>
        <Binary decimal={decimal} setDecimal={setDecimal} />
        <Octal decimal={decimal} setDecimal={setDecimal} />
        <Decimal decimal={decimal} setDecimal={setDecimal} />
        <Hex decimal={decimal} setDecimal={setDecimal} />
        {isNaN(parseInt(decimal)) 
        ?<div>
            <p className='flex justify-center items-center text-red-500 text-xl'><AiFillCheckCircle />unConverted!</p>
        </div>
        :
        <div>
            <p className='flex justify-center items-center text-green-500 text-xl'><AiFillCheckCircle />Converted!</p>
            <p className='text-3xl m-2'>2進数: {convert(2)}</p>
            <p className='text-3xl m-2'>8進数: {convert(8)}</p>
            <p className='text-3xl m-2'>10進数: {convert(10)}</p>
            <p className='text-3xl m-2'>16進数: {convert(16)}</p>
        </div>
        }
        <Link className='text-blue-500 border-b-2 border-blue-500' href='/'>←Back to title</Link>
    </div>
  )
}

export default Converter
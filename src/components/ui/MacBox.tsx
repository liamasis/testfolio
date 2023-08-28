import React from 'react'
import Paragraph from './Paragraph'

interface MacBoxProps {
  msg: string,
  size: string
}

const MacBox: React.FC<MacBoxProps> = ({ msg, size }) => {
  if (size == 'large') {
    const xlRowStart = 2
    const xxlRowStart = 3
    const xlRowSpan = 2
  } else {
    const xlRowStart = 1
    const xxlRowStart = 2
    const xlRowSpan = 1
  }
  return (
    <div className="col-span-3 xl:col-span-1 xl:row-start-1 2xl:row-start-2 xl:row-span-1 h-full w-full flex justify-center items-center ">
      <div className="min-h-1/2 w-2/3 2xl:w-4/5 flex-col justify-center items-end border-4 border-solid rounded-lg dark:border-slate-500 border-slate-800">
        <div className="h-6 border-b-4 dark:border-slate-500 border-slate-800 flex flex-row-reverse gap-1 items-center justify-items-end">
          <div className="pr-1 flex gap-1">
            <div className="rounded-full bg-green-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
            <div className="rounded-full bg-orange-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
            <div className="rounded-full bg-red-400 h-4 w-4 border-2 dark:border-slate-500 border-slate-800"></div>
          </div>
        </div>
        <Paragraph className='p-2' /*  dangerouslySetInnerHTML={{ __html: data }} */>{msg}</Paragraph>
      </div>
    </div>
  )
}

export default MacBox
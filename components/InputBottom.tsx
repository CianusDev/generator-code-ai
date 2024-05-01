import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

type InputBottomProps ={
  handleInputChange:(e:any)=>void;
  handleSubmit:(e:any)=>void;
  input:string; 
  isLoading:boolean;
  
}

const InputBottom = (props:InputBottomProps) => {
  return (
    <section className='w-full mx-auto justify-center items-center'>
        <form onSubmit={props.handleSubmit} className='flex justify-center relative'>
            <Input onChange={(e)=>props.handleInputChange(e)} value={props.input} placeholder='a login card' className='w-96'/>
            <div>
                <Button  type="submit" disabled={props.isLoading} size={'icon'} className=' flex flex-col items-center justify-center'>
                    <Send className='fill-white'/> 
                </Button>
            </div>
        </form>
    </section>
  )
}

export default InputBottom
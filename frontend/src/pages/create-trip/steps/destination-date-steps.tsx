import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'
import { Button } from '../../components/button'
import { useState } from 'react'

interface DestinationDateStepsProps {
  isGuestInputOpen: boolean
  closeGuestInput: () => void
  openGuestInput: () => void
}

export function DestinationDateSteps({
  openGuestInput, closeGuestInput, isGuestInputOpen
}: DestinationDateStepsProps) {

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  return (
    <div className='flex items-center gap-3 px-5 h-16 bg-zinc-900 rounded-xl shadow-shape'>
      <div className='flex items-center gap-2 flex-1'>  
        <MapPin className="size-5 text-zinc-400 flex gap-2"/>
        <input disabled={isGuestInputOpen} className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' type="text" placeholder='Para onde você vai?'/>
      </div>

      <button disabled={isGuestInputOpen} onClick={openDatePicker} className='flex items-center outline-none gap-2 text-left'>  
        <Calendar className="size-5 text-zinc-400"/>
        <span className='text-lg text-zinc-400 flex-1 w-40 '>
          Quando?
        </span>
      </button>

      <div className='w-px h-6 bg-zinc-800'/>

      {isGuestInputOpen ? (
        <Button onClick={closeGuestInput} variant='secondary'>
          Alterar local/data
          <Settings2 className='size-5' />
        </Button>
      ) : (
        <Button onClick={openGuestInput}>
          Continuar 
          <ArrowRight className='size-5'/>
        </Button>
      )}
    </div>
  )
}
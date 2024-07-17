import { MapPin, Calendar, Settings2, ArrowRight, X } from 'lucide-react'
import { Button } from '../../components/button'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import "react-day-picker/dist/style.css"

interface DestinationDateStepsProps {
  isGuestInputOpen: boolean
  closeGuestInput: () => void
  openGuestInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (date: DateRange | undefined) => void
  eventStartAndEndDates: DateRange | undefined
}

export function DestinationDateSteps({
  openGuestInput, closeGuestInput, isGuestInputOpen, setDestination, setEventStartAndEndDates, eventStartAndEndDates
}: DestinationDateStepsProps) {

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const displayeDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL")) : null
  
  return (
    <div className='flex items-center gap-3 px-5 h-16 bg-zinc-900 rounded-xl shadow-shape'>
      <div className='flex items-center gap-2 flex-1'>  
        <MapPin className="size-5 text-zinc-400 flex gap-2"/>
        <input 
        onChange={event => setDestination(event.target.value)}
        disabled={isGuestInputOpen} 
        className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' 
        type="text" 
        placeholder='Para onde você vai?'/>
      </div>

      <button disabled={isGuestInputOpen} onClick={openDatePicker} className='flex items-center gap-2 text-left w-[240px]'>  
        <Calendar className="size-5 text-zinc-400"/>
        <span className='text-lg text-zinc-400 flex-1 w-40 '>
          {displayeDate || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className= 'fixed inset-8 bg-black/60 flex items-center justify-center' >
      <div className=' rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5' >
        <div className='space-y-2' >
          <div className='flex items-center justify-between' >
            <h2 className='text-lg font-semibold' >Selecione a data</h2>
            <button>
              <X onClick={closeDatePicker} className = 'size-5 text-zinc-400' />
            </button>
          </div>
        </div>
        <DayPicker mode='range' selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates}/>
      </div>
    </div>
      )}

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
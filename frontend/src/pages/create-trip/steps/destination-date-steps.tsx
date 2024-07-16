import { MapPin, Calendar, Settings2, ArrowRight } from 'lucide-react'
import { Button } from '../../components/button'

interface DestinationDateStepsProps {
  isGuestInputOpen: boolean
  closeGuestInput: () => void
  openGuestInput: () => void
}

export function DestinationDateSteps({
  openGuestInput, closeGuestInput, isGuestInputOpen
}: DestinationDateStepsProps) {
  return (
    <div className='flex items-center gap-3 px-5 h-16 bg-zinc-900 rounded-xl shadow-shape'>
      <div className='flex items-center gap-2 flex-1'>  
        <MapPin className="size-5 text-zinc-400 flex gap-2"/>
        <input disabled={isGuestInputOpen} className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1' type="text" placeholder='Para onde você vai?'/>
      </div>

      <div className='flex items-center gap-2 min-w-'>  
        <Calendar className="size-5 text-zinc-400"/>
        <input disabled={isGuestInputOpen} className='bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' type="text" placeholder='Quando?'/>
      </div>

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
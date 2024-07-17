import { Calendar, MapPin, Plus, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../../components/button'
import { Activitylist } from './activity-list'
import { CreateActivityModal } from "./create-activity-modal"
import { GuestList } from './guest-list'
import { ImportantLinks } from './important-links'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { format } from 'date-fns'

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId])

   const displayedDate = trip
  ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL"))
  : null

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      {/* header com local/data e botao de config */}
      <div className='px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <MapPin className="size-5 text-zinc-400"/>
          <span className='text-zinc-100'>{trip?.destination}</span>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-2'>
            <Calendar className="size-5 text-zinc-400"/>
            <span className='text-zinc-100'>{displayedDate}</span>
          </div>

          <div className='w-px h-6 bg-zinc-800'/>

          <Button variant='secondary'>
            Alternar local/data
            <Settings2 className='size-5'/>
          </Button>
        </div>
      </div>

      <main className='flex gap-16 px-4'>
        {/* atividades */}
        <div className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Atividade</h2>
            <Button onClick={openCreateActivityModal}>
              <Plus className='size-5'/>
              Cadastrar Atividade
            </Button>
          </div>
          
          <Activitylist/>

        </div>

        <div className='w-80 space-y-6'>
          
          <ImportantLinks/>

          <div className='w-full h-px bg-zinc-800'/>

          <GuestList/>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal 
        closeCreateActivityModal={closeCreateActivityModal}/>
      )}
    </div>
  )
}
import { Calendar, MapPin, Settings2, Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateActivityModal } from "./create-activity-modal"
import { ImportantLinks } from './important-links'
import { Activitylist } from './activity-list'
import { Button } from '../components/button'

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      {/* header com local/data e botao de config */}
      <div className='px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <MapPin className="size-5 text-zinc-400"/>
          <span className='text-zinc-100'>Florianópolis, Brasil</span>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-2'>
            <Calendar className="size-5 text-zinc-400"/>
            <span className='text-zinc-100'>17 a 23 de Agosto</span>
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
            <button onClick={openCreateActivityModal} className='flex items-center gap-2  bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>
            <Plus className='size-5'/>
            Cadastrar Atividade
            </button>
          </div>
          
          <Activitylist/>

        </div>

        <div className='w-80 space-y-6'>
          
          <ImportantLinks/>

          <div className='w-full h-px bg-zinc-800'/>

          
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal 
        closeCreateActivityModal={closeCreateActivityModal}/>
      )}
    </div>
  )
}
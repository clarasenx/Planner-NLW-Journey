import { X, Tag, Calendar, Plus } from 'lucide-react'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({closeCreateActivityModal}:CreateActivityModalProps ) {
  return (
    <div className= 'fixed inset-8 bg-black/60 flex items-center justify-center' >
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5' >
        <div className='space-y-2' >
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold' > Cadastrar atividade</h2>
            <button>
              <X onClick={closeCreateActivityModal} className = 'size-5 text-zinc-400' />
            </button>
          </div>
            <p className = 'text-sm text-zinc-400' >Todos os convidados podem visualizar as atividades.</p>
        </div>

          <form className = 'space-y-3' >
            <div className='px-2.5 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2' >
              <Tag className='text-zinc-400 size-5' />
              <input name='title' className = 'bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' placeholder = 'Qual a atividade?'/>
            </div>
            
            <div className = 'px-2.5 flex-1 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' >
              <Calendar className='text-zinc-400 size-5' />
              <input type='datetime-local' name = 'occurs_at' className = 'bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' placeholder = 'Data e horário da atividade' />
            </div>


            

            <button type = 'submit' className = 'flex items-center gap-2 w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium hover:bg-lime-400'>Salvar atividade
              <Plus className = 'size-5' /> 
            </button>
          </form>
      </div>
    </div>
  )
}
import { Calendar, MapPin, Settings2, Plus, CircleCheck, Link2, UserCog, CircleDashed, X, Tag, Clock, Mail } from 'lucide-react'
import { useState } from 'react'

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

          <button className='bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2'>
          Alternar local/data
            <Settings2 className='size-5'/>
          </button>
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
          
          <div className='space-y-8'>

            <div className='space-y-2.5'>
              <div className='flex items-baseline gap-2'>
                <span className='text-xl text-zinc-300 font-semibold'>Dia 17</span>
                <span className='text-xs text-zinc-500'>Sábado</span>
              </div>
              <p className='text-zinc-500 text-sm'>Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className='space-y-2.5'>
              <div className='flex items-baseline gap-2'>
                <span className='text-xl text-zinc-300 font-semibold'>Dia 18</span>
                <span className='text-xs text-zinc-500'>Domingo</span>
              </div>
              <div className='space-y-2.5'>
                <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
                  <CircleCheck className='size-5 text-lime-300'/>
                  <span className='text-zinc-100'>Almoço</span>
                  <span className='text-zinc-400 text-xs ml-auto'>12:00h</span>
                </div>

                <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
                  <CircleCheck className='size-5 text-lime-300'/>
                  <span className='text-zinc-100'>Almoço</span>
                  <span className='text-zinc-400 text-xs ml-auto'>12:00h</span>
                </div>
              </div>
            </div>

            

          </div>

        </div>

        <div className='w-80 space-y-6'>
          <div className='space-y-6'>
            <h2 className='font-semibold text-xl'>Links Importantes</h2>
            
            <div className='space-y-5'>
              {/* links */}
              <div className='flex items-center justify-between'>
                <div className='space-y-1.5'>
                  <span className='block font-medium text-zinc-100'>Reserva Hotel</span>
                  <a href='#' className='block text-xs text-zinc-400 hover:text-zinc-200 truncate'>
                    https://google.com/asdanholikhndolik8888888888888888888888888hosdnhsdholis</a>
                </div>
                <Link2 className='size-5 text-zinc-400 shrink-0'/>
              </div>

              <div className='flex items-center justify-between'>
                <div className='space-y-1.5'>
                  <span className='block font-medium text-zinc-100'>Reserva Hotel</span>
                  <a href='#' className='block text-xs text-zinc-400 hover:text-zinc-200 truncate'>
                    https://google.com/asdanholikhndolik8888888888888888888888888hosdnhsdholis</a>
                </div>
                <Link2 className='size-5 text-zinc-400 shrink-0'/>
              </div>

            </div>

            <button className='bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 w-full'>
              <Plus className='size-5'/>
              Cadastrar novo link
            </button>
          </div>

          <div className='w-full h-px bg-zinc-800'/>

          <div className='space-y-6'>
            <h2 className='font-semibold text-xl'>Convidados</h2>
            
            <div className='space-y-5'>
              {/* links */}
              <div className='flex items-center justify-between'>
                <div className='space-y-1.5'>
                  <span className='block font-medium text-zinc-100'>Nome do usuário</span>
                  <span className='block text-sm text-zinc-400 truncate'>
                  Email do usuário</span>
                </div>
                <CircleDashed className='size-5 text-zinc-400 shrink-0'/>
              </div>
              
              <div className='flex items-center justify-between'>
                <div className='space-y-1.5'>
                  <span className='block font-medium text-zinc-100'>Nome do usuário</span>
                  <span className='block text-sm text-zinc-400 truncate'>
                  Email do usuário</span>
                </div>
                <CircleCheck className='size-5 text-lime-300 shrink-0'/>
              </div>

            </div>

            <button className='bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 w-full'>
              <UserCog className='size-5'/>
                Gerenciar convidados
            </button>
          </div>
        </div>
      </main>

      {isCreateActivityModalOpen && (
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
            
            <div className='flex items-center gap-2'>
              <div className = 'px-2.5 flex-1 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' >
              <Mail className='text-zinc-400 size-5' />
              <input type='email' name = 'email' className = 'bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' placeholder = 'Data' />
            </div>

              <div className = 'px-2.5 w-36 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2' >
                <Clock className='text-zinc-400 size-5' />
                <input type='email' name = 'email' className = 'bg-transparent text-lg placeholder-zinc-400 flex-1 w-40 outline-none' placeholder = 'Hora' />
              </div>
            </div>

            <button type = 'submit' className = 'flex items-center gap-2 w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium hover:bg-lime-400'>Salvar atividade
            <Plus className = 'size-5' /> 
            </button>
          </form>
        </div>
      </div>
      )}
    </div>
  )
}
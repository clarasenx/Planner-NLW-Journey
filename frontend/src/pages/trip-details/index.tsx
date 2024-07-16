import { Calendar, MapPin, Settings2, Plus, CircleCheck, Link2, UserCog, CircleDashed } from 'lucide-react'

export function TripDetailsPage() {
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
            <button className='flex items-center gap-2  bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400'>
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
    </div>
  )
}
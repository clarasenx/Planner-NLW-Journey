import { Link2, Plus } from 'lucide-react';

export function ImportantLinks() {
  return (
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
  )
}
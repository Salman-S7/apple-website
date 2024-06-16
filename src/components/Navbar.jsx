import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex-center'>
          <nav className='flex w-full screen-max-width'>
              <img src={appleImg} width={14} height={18} />
              <div className='flex flex-1 justify-center max-sm:hidden'>
                  {
                      navLists.map((item) => {
                          return <div className='px-5 text-sm cursor-pointer text-gray hover:text-white
                       transition-all' key={item}>{item} </div>  
                      })
                  }
              </div>
              <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                  <img src={searchImg} alt="search" height={18} width={18} />
                  <img src={bagImg} alt="search" height={18} width={18}/>
                  
              </div>
          </nav>      
    </header>
  )
}

export default Navbar
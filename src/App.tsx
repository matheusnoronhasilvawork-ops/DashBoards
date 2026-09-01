import './App.css'
import { House, Search, Star, Clock, Folder, Bell, ArrowBigDown, ArrowDown, ArrowDown10, ArrowDownIcon, ArrowDownNarrowWide, ArrowDownToLine, ArrowDownWideNarrow, DollarSign, BaggageClaim, GitGraph, Database, ArrowRight } from 'lucide-react'
import tabletImage from './assets/image-removebg-preview.png'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex min-h-screen w-full flex-row">
        <nav className="sticky top-0 h-screen gap-6 max-h-screen flex flex-col bg-[#010e25] px-8 py-5">
          <div className="flex flex-row items-center">
            <img src={logo} className="h-15 w-15" />
            <div className="flex-1">
              <h1 className="font-bold text-2xl text-white">Galeria de<br/> Relatórios</h1>
            </div>
          </div>
          <nav className="flex flex-col items-center gap-0 text-sm">
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <House color='white' size={24} strokeWidth={0.7} />
              <h2 className=" text-white">Início</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <Search color='white' size={24} strokeWidth={0.7} />
              <h2 className=" text-white">Explorar</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <Star color='white' size={24} strokeWidth={0.7} />
              <h2 className=" text-white">Favoritos</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <Clock color='white' size={24} strokeWidth={0.7} />
              <h2 className=" text-white">Recentes</h2>
            </div>
          </nav>
          <div className="h-px w-full bg-gray-200" />
          <nav className="flex flex-col items-center gap-0 text-sm">
            <h3 className='mr-auto text-white'>Categorias</h3>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <Folder color='white' size={24} strokeWidth={0.7} />
              <h2 className="text-white">Financeiro</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <Folder color='white' size={24} strokeWidth={0.7} />
              <h2 className="text-white">Comercial</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <Folder color='white' size={24} strokeWidth={0.7} />
              <h2 className="text-white">Operações</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-[#04193e] items-center cursor-pointer gap-3">
              <Folder color='white' size={24} strokeWidth={0.7} />
              <h2 className="text-white">Pessoas</h2>
            </div>
          </nav>
          <div className="mt-auto flex flex-row w-full bg-blue-200 items-center justify-around">
            <div className="h-5 w-5 bg-white" />
            <div className="flex flex-col">
              <h3>asasas</h3>
              <h4>ksksksksk</h4>
            </div>
            <div className="h-5 w-5 bg-white" />
          </div>
        </nav>
        <div className="flex-8 flex flex-col">
          <header className="bg-white flex flex-row h-20 py-5 px-8 items-center">
            <div className="border-2 gap-3 px-3 w-120 border-gray-300 h-full flex flex-row items-center">
              <Search color='gray' size={24} strokeWidth={0.7} />
              <input placeholder="Buscar relatório" className="w-full outline-none" type="text" />
            </div>
            <div className="ml-auto flex flex-row items-center gap-3">
              <Star color='gray' size={18} strokeWidth={0.7} />
              <Bell color='gray' size={18} strokeWidth={0.7} />
              <div className="flex flex-row items-center">
                <div className="h-10 w-10 bg-blue-500 rounded-full" />
                <ArrowDown color='gray' size={24} strokeWidth={0.7} />
              </div>
            </div>
          </header>
          <main className='flex grow flex-col'>
            <div className="h-100 pt-12 bg-gray-200 flex flex-row items-center px-10 justify-center gap-3">
              <div className="flex-1 h-full flex flex-col gap-8 justify-center">
                <h2 className='font-medium text-xl tracking-wider '>RELATÓRIO ESTRATÉGICO</h2>
                <div className="flex flex-col w-120 gap-4">
                  <h1 className='font-bold text-4xl'>Dashboard executivo</h1>
                  <p>sdisdj sdijisdj isdisdsj sdosdsd sdsdsd df f f s d ssdsd qw we wed ef ef   os s sas a sas  sdfjdijfidf kkdos</p>
                </div>
                <div className="flex flex-row gap-3 mt-3">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Ação 1</button>
                  <button className="bg-gray-300 text-black px-4 py-2 rounded">Ação 2</button>
                </div>
              </div>
              <img className='flex-1 h-full' src={tabletImage} alt="Tablet" />
            </div>
            <div className="flex flex-1 px-10 py-4 w-full flex-col gap-4">
              <div className="flex flex-row justify-between w-full">
                <h3>Todos os relatórios</h3>
                <h3>Ver todos</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-80 col-span-1 gap-5 p-10 flex flex-col rounded-2xl border-2 border-green-300">
                  <div className="rounded-full flex items-center justify-center h-12 w-12 bg-green-200">
                    <DollarSign color='green' size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className='text-2xl font-bold'>Resultado financeiro</h1>
                    <p>dshudsd sdsud sds ds dsdsd sdsd sd sdshuhd</p>
                  </div>
                  <div className="flex mt-auto flex-row w-full justify-between">
                    <span>Acessar</span>
                    <ArrowRight color='black' size={15} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="h-80 col-span-1 gap-5 p-10 flex flex-col rounded-2xl border-2 border-green-300">
                  <div className="rounded-full flex items-center justify-center h-12 w-12 bg-green-200">
                    <DollarSign color='green' size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className='text-2xl font-bold'>Resultado financeiro</h1>
                    <p>dshudsd sdsud sds ds dsdsd sdsd sd sdshuhd</p>
                  </div>
                  <div className="flex mt-auto flex-row w-full justify-between">
                    <span>Acessar</span>
                    <ArrowRight color='black' size={15} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="h-80 col-span-1 gap-5 p-10 flex flex-col rounded-2xl border-2 border-green-300">
                  <div className="rounded-full flex items-center justify-center h-12 w-12 bg-green-200">
                    <DollarSign color='green' size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className='text-2xl font-bold'>Resultado financeiro</h1>
                    <p>dshudsd sdsud sds ds dsdsd sdsd sd sdshuhd</p>
                  </div>
                  <div className="flex mt-auto flex-row w-full justify-between">
                    <span>Acessar</span>
                    <ArrowRight color='black' size={15} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <footer className="min-h-25 bg-red-200"></footer>
    </div>
  )
}

export default App

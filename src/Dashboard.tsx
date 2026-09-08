import { House, Search, Star, Clock, Folder, Bell, ArrowBigDown, ArrowDown, ArrowDown10, ArrowDownIcon, ArrowDownNarrowWide, ArrowDownToLine, ArrowDownWideNarrow, DollarSign, BaggageClaim, GitGraph, Database, ArrowRight, Calendar, Building, User, User2, CircleCheck, CircleCheckBig } from 'lucide-react'
import tabletImage from './assets/image-removebg-preview.png'
import logo from './assets/logo.png'

export default function Dashboard() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex min-h-screen w-full flex-row">
                <nav className="sticky top-0 h-screen gap-6 max-h-screen flex flex-col bg-[#010e25] px-8 py-5">
                    <div className="flex flex-row items-center">
                        <img src={logo} className="h-15 w-15" />
                        <div className="flex-1">
                            <h1 className="font-bold text-2xl text-white">Galeria de<br /> Relatórios</h1>
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
                    <header className="bg-white flex flex-row h-20 py-3 px-8 items-center">
                        <div className="h-full flex flex-col">
                            <h1 className='font-bold text-3xl'>Visão geral</h1>
                            <h2 className='text-gray-500 text-sm'>Acompanhe a produtividade e a qualidade dos registros</h2>
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
                        <div className="h-full pt-6 bg-gray-200 flex flex-row">
                            <div className="flex flex-row w-full justify-evenly">
                                <div className="h-fit bg-white border-2 border-gray-400 items-center gap-4 rounded-lg flex flex-row p-3">
                                    <Calendar color='gray' size={24} strokeWidth={0.7} />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-md'>Perído</h3>
                                        <h4 className='text-gray-500 text-[0.7rem]'>01/08/2026 - 07/08/2026</h4>
                                    </div>
                                    <ArrowDown color='gray' size={18} strokeWidth={0.7} />
                                </div>
                                <div className="h-fit bg-white border-2 border-gray-400 items-center gap-4 rounded-lg flex flex-row p-3">
                                    <Building color='gray' size={24} strokeWidth={0.7} />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-md'>Unidade</h3>
                                        <h4 className='text-gray-500 text-[0.7rem]'>Todos</h4>
                                    </div>
                                    <ArrowDown color='gray' size={18} strokeWidth={0.7} />
                                </div>
                                <div className="h-fit bg-white border-2 border-gray-400 items-center gap-4 rounded-lg flex flex-row p-3">
                                    <User color='gray' size={24} strokeWidth={0.7} />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-md'>Colaborador</h3>
                                        <h4 className='text-gray-500 text-[0.7rem]'>Todos</h4>
                                    </div>
                                    <ArrowDown color='gray' size={18} strokeWidth={0.7} />
                                </div>
                                <div className="h-fit bg-white border-2 border-gray-400 items-center gap-4 rounded-lg flex flex-row p-3">
                                    <User color='gray' size={24} strokeWidth={0.7} />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-md'>Gestor</h3>
                                        <h4 className='text-gray-500 text-[0.7rem]'>Todos</h4>
                                    </div>
                                    <ArrowDown color='gray' size={18} strokeWidth={0.7} />
                                </div>
                                <div className="h-fit bg-white border-2 border-gray-400 items-center gap-4 rounded-lg flex flex-row p-3">
                                    <CircleCheckBig color='gray' size={24} strokeWidth={0.7} />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-md'>Status da correção</h3>
                                        <h4 className='text-gray-500 text-[0.7rem]'>Todos</h4>
                                    </div>
                                    <ArrowDown color='gray' size={18} strokeWidth={0.7} />
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
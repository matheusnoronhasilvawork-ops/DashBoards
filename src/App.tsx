import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-y-auto">
      <main className="flex min-h-screen w-full flex-row">
        <nav className="gap-6 flex-1 flex flex-col bg-blue-800 px-8 py-5">
          <div className="flex flex-row">
            <div className="h-20 w-20 bg-white" />
            <div className="flex-1 bg-gray-200">
              <h1 className="font-bold text-3xl text-white">Relatório <br /> de dados</h1>
            </div>
          </div>
          <nav className="flex flex-col items-center gap-4">
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Início</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Explorar</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Favoritos</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Recentes</h2>
            </div>
          </nav>
          <div className="h-[1px] w-full bg-gray-200" />
          <nav className="flex flex-col items-center gap-4">
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Início</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Explorar</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Favoritos</h2>
            </div>
            <div className="px-4 py-2 rounded-md flex flex-row w-full hover:bg-blue-700 items-center cursor-pointer gap-3">
              <div className="h-5 w-5 bg-white" />
              <h2 className="text-lg text-white">Recentes</h2>
            </div>
          </nav>
          <div className="flex flex-row w-full bg-blue-200 items-center justify-around">
            <div className="h-5 w-5 bg-white"/>
            <div className="flex flex-col">
              <h3>asasas</h3>
              <h4>ksksksksk</h4>
            </div>
            <div className="h-5 w-5 bg-white" />
          </div>
        </nav>

        <div className="flex-8 bg-gray-100"></div>
      </main>

      <footer className="min-h-100 bg-red-200"></footer>
    </div>
  )
}

export default App

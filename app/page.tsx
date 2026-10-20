import { Dashboard } from '../components/dashboard'

export default function Page() {
  return (
    <main className="min-h-dvh bg-[#07070A] bg-cover bg-center bg-fixed">
      <div className="w-auto flex max-w-6xl flex-col gap-5 p-5 pb-10 pt-10">
        <h1 className="text-center font-display text-[4.5rem] uppercase leading-[1.1] tracking-tight text-cyan-200">
          Antonio Trader
        </h1>
        <Dashboard />
      </div>
    </main>
  )
}

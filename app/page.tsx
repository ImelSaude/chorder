export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Chorder
      </h1>
      <div className="flex">
        <a
          href="/songs/"
          className="bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
        >
          Songs
        </a>
      </div>
    </main>
  )
}

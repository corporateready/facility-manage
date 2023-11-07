import Image from 'next/image'
import Registration from "./pages/register-page"
import Login from "./pages/login-page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=''>
        <Registration />
        {/* <Login /> */}
      </div>
    </main>
  )
}

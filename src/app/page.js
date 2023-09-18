import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-primary`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <h1 className="text-white text-[35px] font-bold">Welcome to the Scholarship Portal</h1>
      <Link href="/portals" className="text-white">State Portal</Link>
      <Link href="/Login" className="text-white">Login</Link>
      <Link href="/Register" className="text-white">Register</Link>
    </main>
  )
}

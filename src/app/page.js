import Layout from "./components/Layout"

export default function Home() {
  return (
    <main className={` min-h-screen bg-primary`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <Layout>
        <img src="/Scholar6.jpg"  alt=""/>
      <h1 className="text-white text-[35px] font-bold text-center">Welcome to the Scholarship Portal</h1>
      <mesh></mesh>
      </Layout>
    </main>
  )
}

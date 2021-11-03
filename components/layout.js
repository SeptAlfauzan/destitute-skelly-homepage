import Head from 'next/head'

export default function Layout({children, title = "test web grafkom"}){
    return(
        <div className="min-h-screen text-white  bg-primary">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-0 pt-0 flex flex-col  w-full text-center">
        {children}
      </main>

      <footer className="flex items-center justify-center w-full h-24 bg-black text-gray-100">
        <p className="flex items-center text-center">
            &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
    )
}
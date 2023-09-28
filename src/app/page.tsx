import Feed from "@/components/Feed"
import Link from "next/link"

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        {/* <br className="max-md:hidden" /> */}
        <br />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Promtopia is an open source AI prompting tool for the modern world to discover, create and Share creative prompts</p>
      <Feed />
      <Link href="/extra">Extra</Link>
    </section>
  )
}

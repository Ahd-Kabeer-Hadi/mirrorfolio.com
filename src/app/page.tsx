import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm mb-3">
        <p className="fixed flex from-zinc-200  backdrop-blur-2xl justify-center font-mono left-0 lg:p-4 lg:rounded-xl lg:static lg:w-auto pb-6 pt-8 top-0 w-full">
          <code className="font-mono font-bold text-4xl logo-font relative  dark:text-color-[#ffffff]">Mirrorfolio&nbsp;</code>
          
          
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p>Reflecting the future</p>
        </div>
       
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 align-middle">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 slide-in-fwd-left">
      <p className=" flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 p-6 lg:dark:bg-zinc-800/30 max-w-[40ch]">
          
          Welcome, dear traveler! 😄 I am Mr. Mirror, <br /> the gatekeeper and guide of this extraordinary realm. 🪄 As you step into Mirrorfolio, you'll be enchanted by the captivating world created by our brilliant mind, Kabeer. Currently, he is infusing this realm with mesmerizing elements of React magic, where code and creativity intertwine in an ethereal dance of fantasy, adding more power and shine to its wonders. 💫 While we work on this transformation, you can still connect with Kabeer's creative genius through Figma, Bento.me, Instagram, and more. Discover sneak peeks of his enchanting projects specially curated for your delight. 🎨 Stay tuned for the grand unveiling of this magical experience! 
          </p>
      </div>
       
        
      
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative"
            src="https://raw.githubusercontent.com/Ahd-Kabeer-Hadi/mirrorfolio_site/main/mr_mirror.png"
            alt="Next.js Logo"
            width={384}
            height={576}
            priority
          />
        </div>
      </div>
      

      <div className="mb-32 mt-12 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://cal.com/ahd-kabeerhadi"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          📅 <br />
          Book an <br />
          Appointment {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Discover Kabeer's calendar and schedule a magical rendezvous!
          </p>
        </a>

        <a
          href="https://www.figma.com/@ahdKabeer"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          🎨 <br />
          View Project
          <br /> Sneakpeaks {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Unveil the enchanting wonders of Kabeer's creations from Figma!
          </p>
        </a>

        <a
          href="https://bento.me/ahdkabeerhadi"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          📜 <br /> Explore <br />His Bio{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Embark on an enchanting journey through Kabeer's extraordinary tale!
          </p>
        </a>

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          📥 <br /> Download <br /> His Resume{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Unlock the secrets of his remarkable skills and achievements!
          </p>
        </a> */}
      </div>
    </main>
  )
}

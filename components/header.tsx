import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav>
      <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
        <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/">Home</Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/about">About</Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/contact">Contact</Link>
        </div>
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link  className="w-28 dark:hidden" href="/">
            <Image
              itemProp="image"
              src={process.env.NEXT_PUBLIC_URL+'/assets/images/logo-dark.svg'}
              alt="logo"
              width="100"
              height="58"
              placeholder="blur"
              blurDataURL={process.env.NEXT_PUBLIC_URL+'/assets/images/logo-dark.svg'}
            />
          </Link>
          <Link  className="hidden w-28 dark:block" href="/">
            <Image
                itemProp="image"
                src={process.env.NEXT_PUBLIC_URL+'/assets/images/logo-dark.svg'}
                alt="logo"
                width="100"
                height="58"
                placeholder="blur"
                blurDataURL={process.env.NEXT_PUBLIC_URL+'/assets/images/logo-dark.svg'}
              />
          </Link >
          <button aria-label="Toggle Menu" className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden " id="headlessui-disclosure-button-:r0:" type="button" aria-expanded="false" data-headlessui-state>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
        <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"  href="/archive">
            <span> Archive</span>
          </Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400" target="_blank" rel="noopener" href="https://stablo-pro.web3templates.com/">
            <span> Pro Version</span>
            <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">new</span>
          </Link>
          <Link className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400" target="_blank" rel="noopener" href="https://web3templates.com/templates/stablo-minimal-blog-website-template">
            <span> Download</span>
          </Link>
        </div>
      </div>
    </nav>

  )
}

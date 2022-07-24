import Container from './container'
import { BLOG_NAME } from '../lib/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <Link href="/">
            {/* <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"> */}
              <a className="hover:underline text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">{BLOG_NAME}</a>
            {/* </h3> */}
          </Link>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {/* <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a> */}
            {/* <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a> */}
            <a href="https://twitter.com/u100golfblog?ref_src=twsrc%5Etfw" className="mx-3 twitter-follow-button" data-show-count="false">Follow @u100golfblog</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

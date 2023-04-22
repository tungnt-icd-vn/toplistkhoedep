import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
      <div className="text-sm text-center">Copyright © 2023 Stablo. All rights reserved.</div>
        <div className="mt-1 text-sm text-center text-gray-500 dark:text-gray-600">Made by <a href="https://www.web3templates.com/?ref=stablo-template" rel="noopener" target="_blank">Web3Templates</a>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
            <select name="themeSwitch">
              <option value="system">System</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>
      </Container>
    </footer>
  )
}

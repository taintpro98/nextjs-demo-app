// pages/index.tsx

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      My Next App
    </div>
  )
}

export default Page
import * as React from 'react'

import { Link } from '@tanstack/react-router'
import { createLazyFileRoute } from '@tanstack/react-router'

const Index = React.lazy(() => import("@/pages/index"))

export const Route = createLazyFileRoute('/')({
    component: () => (
        <React.Suspense fallback={<>Loading... page index</>}>
            <Index />
            <Link to='/about' title='ini ke about'>about</Link>
        </React.Suspense>
    ),
})

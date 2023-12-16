'use client'

import React, { useState } from 'react'

export default function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    return (
        <div className='flex gap-4 h-full'>
            NavItems
        </div>
    )
}

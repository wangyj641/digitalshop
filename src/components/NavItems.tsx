'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import React, { useState } from 'react'

export default function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    return (
        <div className='flex gap-4 h-full'>
            {
                PRODUCT_CATEGORIES.map((category, i) => {
                    const handleOpen = () => {
                        if (activeIndex === i) {
                            setActiveIndex(null)

                        } else {
                            setActiveIndex(i)
                        }
                    }
                })
            }
        </div>
    )
}



'use client'

import { useState } from 'react'

export function useAbortFetch() {
  const [controller, setControler] = useState<AbortController | null>(null)

  function getAbortController() {
    if (controller) {
      controller?.abort()
    }

    const ctrl = new AbortController()

    setControler(ctrl)

    return ctrl
  }

  return {
    getAbortController,
  }
}

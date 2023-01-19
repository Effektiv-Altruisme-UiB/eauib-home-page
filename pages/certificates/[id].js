import { useEffect } from 'react'
import { useRouter } from 'next/router'

// This page is only a redirect to the new certificate page and is necessary for older certificates

function Certificate() {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    window.location.assign(`https://certificates.eauib.no/${id}`)
  })
  return <></>
}

export default Certificate

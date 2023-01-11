import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Certificate() {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    window.location.assign(`https://certificates.eauib.no/${id}`)
  })
  return <></>
}

export default Certificate

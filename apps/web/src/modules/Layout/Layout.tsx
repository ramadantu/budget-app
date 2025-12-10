import { useSession } from 'next-auth/react'
import styled from 'styled-components'

import Nav from '../Nav'

const StyledLayout = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  gap: 2rem;
`

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { data } = useSession({ required: true })

  return (
    <StyledLayout>
      <Nav username={data?.user?.name} />
      <main>{children}</main>
    </StyledLayout>
  )
}

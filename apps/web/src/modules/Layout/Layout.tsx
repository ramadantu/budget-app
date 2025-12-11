import { useSession } from 'next-auth/react'

import Nav from '../../components/Nav'
import StyledLayout from '../../styles/StyledLayout'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { data } = useSession({ required: true })

  return (
    <StyledLayout>
      <Nav username={data?.user?.name} />
      <main>{children}</main>
    </StyledLayout>
  )
}

import { type GetServerSideProps } from 'next'
import { Route } from '../constants'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: Route.AuthLogout,
      permanent: false,
    },
  }
}

export default () => null

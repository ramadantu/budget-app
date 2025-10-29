import { type GetServerSideProps } from 'next'
import { Route } from '../constants'

export const getServerSideProps: GetServerSideProps = async ({
  query: { returnRoute: _returnRoute },
}) => {
  const returnRoute = _returnRoute?.toString() ?? Route.Home

  return {
    redirect: {
      destination: `${Route.AuthLogin}?returnRoute=${returnRoute}`,
      permanent: false,
    },
  }
}

export default () => null

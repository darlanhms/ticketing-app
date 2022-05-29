import type { NextPage, GetServerSideProps } from 'next';
import buildClient from '../api/buildClient';

interface HomeProps {
  user?: {
    email: string;
  };
}

const Home: NextPage<HomeProps> = ({ user }) => {
  return <h1>{user ? 'You are signed in' : 'You are not signed in'}</h1>;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async context => {
  try {
    const { data } = await buildClient(context).get('/api/users/current-user');

    return {
      props: { user: data.currentUser },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Home;

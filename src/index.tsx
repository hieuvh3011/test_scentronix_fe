import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/recipes',
      permanent: false,
    },
  };
};

export default function Home() {
  return null;
}
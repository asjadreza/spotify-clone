import { getProviders, signIn } from 'next-auth/react';


// server side render, this will run on the server before the page gets delivered
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers, // Returned as a prop called "providers"
    },
  };
}

const Login = ({ providers }) => {
  return (
    <div>
      {/* <img className='w-52 mb-2' src='/images/spotify-icon.svg' alt='' /> */}
      <img className='w-52 mb-2' src='https://links.papareact.com/9xl' alt='' />

      {Object.values(providers).map((provider) => (
        <div>
          <button>Login with {provider.name}</button>
        </div>
      ))}


    </div>
  )
}

export default Login;
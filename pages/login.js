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
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      {/* <img className='w-52 mb-2' src='/images/spotify-icon.svg' alt='' /> */}
      <img className='w-52 mb-2' src='https://links.papareact.com/9xl' alt='' />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='bg-[#18D860] text-white p-5 
          rounded-full mt-2'
            onClick={() => signIn(provider.id, { callbackUrl: "/"})}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login;
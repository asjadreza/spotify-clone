import { getProviders, signIn } from "next-auth/react";
import { toast } from "react-toastify";

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

  const handleLogin = async (providerId) => {
    try {
      const result = await signIn(providerId, { callbackUrl: "/" });
      if (result && result.error) {
        throw new Error(result.error); // Handle errors gracefully
      }
      // Successful login
      toast.success("User logged in successfully");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again."); // Informative error message
    }
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-2" src="https://links.papareact.com/9xl" alt="" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full mt-2"
            onClick={() => handleLogin(provider.id)} // Use handleLogin function
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

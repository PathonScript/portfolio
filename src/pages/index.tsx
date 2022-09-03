import type { NextPage } from "next";
import Head from "next/head";
// import { trpc } from "../utils/trpc";


const Home: NextPage = () => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  return (
    <>
      <Head>
        <title>Patato</title>
        <meta name="description" content="Student? Web Developer? Game Developer? Learning Blender?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fullflex bg-yellow-200">
        <div className="w-3/5 h-3/4 flex flex-col shadow-lg bg-white border-2 border-blue-900 rounded-lg">
          <div className="w-full flex justify-end top">
            <div className="border-blue-500 window-btn">➖</div>
            <div className="border-green-500 window-btn">⏹️</div>
            <div className="border-red-500 window-btn">❌</div>
          </div>
          <div className="flex flex-row bottom">
            <div className="section basis-1/5">
                <h1 className="nav">Home</h1>
                <h1 className="nav">About me</h1>
                <h1 className="nav">Portfolio</h1>
                <h1 className="nav">Contacts</h1>
                <h1 className="items-end">Version 1.0.0</h1>          
            </div>
            <div className="section basis-4/5">

            </div>

          </div>
        </div>
      </div>      

    </>
  );
};


export default Home;

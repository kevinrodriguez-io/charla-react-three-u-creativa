import type { NextPage } from "next";
import dynamic from "next/dynamic";

const App3DCanvas = dynamic(
  async () => {
    const { App3DCanvas } = await import("../components/App3DCanvas");
    return App3DCanvas;
  },
  { ssr: false }
);

const Home: NextPage = () => {
  return <App3DCanvas />;
};

export default Home;

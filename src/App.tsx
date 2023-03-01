import { FC } from "react";
import Player from "./ui/components/Player";
import Content from "./ui/layouts/Content";
import Header from "./ui/layouts/Header";
import MainLayout from "./ui/layouts/MainLayout";

const App: FC = () => {
  return (
    <MainLayout>
      <Header />
      <Content />
      <Player />
    </MainLayout>
  );
};

export default App;

import { FC } from "react";
import PlayerBox from "./ui/components/AudioPlayer/PlayerBox";
import Content from "./ui/layouts/Content";
import Header from "./ui/layouts/Header";
import MainLayout from "./ui/layouts/MainLayout";

const App: FC = () => {
  return (
    <MainLayout>
      <Header />
      <Content />
      <PlayerBox />
    </MainLayout>
  );
};

export default App;

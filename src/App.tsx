import { FC } from "react";
import AudioPlayer from "./ui/components/AudioPlayer/AudioPlayer";
import Content from "./ui/layouts/Content";
import Header from "./ui/layouts/Header";
import MainLayout from "./ui/layouts/MainLayout";

const App: FC = () => {
  return (
    <MainLayout>
      <Header />
      <Content />
      <AudioPlayer />
    </MainLayout>
  );
};

export default App;

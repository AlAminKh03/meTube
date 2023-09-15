import Navbar from "../Components/Navbar/Navbar";
import Player from "../Components/Description/Player";
import Description from "../Components/Description/Description";
import RelatedVideoList from "../Components/list/RelatedVideoList";
import Footer from "../Components/Footer";

type Props = {};

const Video = (props: Props) => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />

              <Description />
            </div>

            <RelatedVideoList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;

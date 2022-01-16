import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

const Main = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-[935px] mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid  md:col-span-1 xl:ml-8">
        <div className="fixed top-20 xl:w-[293px]">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  );
};

export default Main;

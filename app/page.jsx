import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Steps />

      <div className="h-[300px]"></div>
    </>
  );
}

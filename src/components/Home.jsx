import LandPage from "./LandPage";

export default () => {
  const handleScroll = (e) => {
    console.log("sasd");
    if (e.currentTarget.scrollTop === 0) {
      alert("on top");
    }
  };

  return (
    <div
      onScroll={handleScroll}
      className="flex flex-col justify-center w-full"
    >
      <LandPage />
    </div>
  );
};

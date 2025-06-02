import Itemtopics from "./ItemTopics";

export default function MenuItem() {
  return (
    <>
      <div className="flex flex-row">
        <img
          src="../src/assets/hamb-1.png"
          alt="Produto"
          className="w-32 h-32 rounded-md m-6 hover:scale-110 hover:-rotate-2 duration-300"
        />
        <Itemtopics />
      </div>
    </>
  );
}

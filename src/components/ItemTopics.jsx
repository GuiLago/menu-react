import { CirclePlusIcon } from "lucide-react";

export default function ItemTopics() {
  return (
    <>
      <div className="p-6 justify-end">
        <h3 className="text-2xl font-medium">Item Name</h3>
        <h5 className="font-medium">Price: $???</h5>
        <p className="text-sm max-h-1 max-w-screen">
          {/* Description max lines = 2 */}
          Item Description: Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Fuga officia rerum accusamus, hic commodi nobis!
        </p>
      </div>
      <button className="px-4 mr-10">
        <CirclePlusIcon className="rounded-full bg-amber-50/5 hover:scale-110 duration-200 cursor-pointer" />
      </button>
    </>
  );
}

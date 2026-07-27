import { Link } from "react-router-dom";

function BlogCard({
  title,
  image,
  category,
  authorImage,
  authorName,
  date,
  id,
}) {
  return (
    <Link to={`/${id}/${title}`} className="w-full h-full">
      <div className="w-full h-full flex flex-col gap-4 rounded-xl border border-[#E8E8EA] p-4 bg-white">
        <img
          src={image}
          alt="Blog"
          className="w-full h-[210px] rounded-md object-cover"
        />

        <div className="flex flex-col gap-4 pl-2">
          <span className="inline-block w-fit text-sm font-medium text-[#4B6BFB] bg-[#4B6BFB0D] px-3 py-1 rounded-md">
            {category}
          </span>
          <h3 className="font-work-sans text-2xl font-semibold w-full  leading-7 tracking-normal text-left text-[#141624] line-clamp-3">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-4 pl-2 mt-auto">
          <img
            src={authorImage}
            alt="Author"
            className="w-9 h-9 rounded-[28px] object-cover"
          />
          <div className="text-base font-normal leading-6 tracking-normal text-[#97989F] gap-8 justify-between flex">
            <span>{authorName}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

import Image from "next/image";
import { FC } from "react";

interface BlogAuthorProps {
    authorAvatar: string;
    authorName: string;
    authorJob: string;
  }
const BlogAuthor: FC<BlogAuthorProps> = (props) => {
    const { authorAvatar, authorName, authorJob } = props;
    return (
      <div className="flex items-center mt-5">
        <Image
          width={100}
          height={200}
          src={`/assets/${authorAvatar}`}
          className="w-14 h-14 object-cover" alt={"..."}        
        />
        <div className="ml-4">
          <h3>{authorName}</h3>
          <p className="text-white/60 text-sm mt-1">{authorJob}</p>
        </div>
      </div>
    );
  }
  
  export default BlogAuthor
import Tag from "@/components/Tag"
import Image from "next/image"

import { IPost } from "@/models/post"
function Post({ title, tag, image, category, desc }: IPost) {
  return (
    <div className='pt-10 pb-5 mx-5 sm:mx-0 sm:flex sm:items-center sm:gap-5 xl:gap-10 border-b border-slate-300'>
      <div className='sm:basis-2/5'>
        {image && <Image src={image} alt='rectagle' width={300} height={300} className='w-full'/>}
      </div>
      <div className='sm:basis-3/5'>
        <h2 className='text-[24px] font-bold py-5 leading-8'>{title}</h2>
        <div className='text-lg'>
          <Tag text={tag} />
          <span className='ml-5 text-slate-400'>
            {category.map((el, i) => (
              <span className='mr-2' key={i}>
                {el}
              </span>
            ))}
          </span>
        </div>
        <p className='py-5'>{desc.substring(0,150)}...</p>
      </div>
    </div>
  )
}

export default Post

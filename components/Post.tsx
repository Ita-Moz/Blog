import Tag from "@/components/Tag"
import { IPost } from "@/models/post"
import Image from "next/image"
import { useRouter } from "next/router"
function Post({ id, title, tag, image, category, desc }: IPost) {
  const router = useRouter()
  return (
    <div className='pt-10 pb-5 mx-5 sm:mx-0 sm:flex sm:items-center sm:gap-5 xl:gap-10 border-b border-slate-300 hover:scale-[1.03] sm:hover:scale-[1.01] duration-300'>
      <div className='sm:basis-2/5 flex justify-center items-center cursor-pointer' onClick={() => router.push(`/blog/${id}`)}>
        {image && (
          <Image
            src={image}
            alt='rectagle'
            width={300}
            height={300}
            className='min-w-full sm:max-w-[300px] h-[200px] object-cover object-center rounded'
          />
        )}
      </div>
      <div className='sm:basis-3/5 mt-5 sm:mt-0'>
        <div className='text-[24px] font-bold pb-5 leading-8 cursor-pointer' onClick={()=>router.push(`/blog/${id}`)}>
          {title}
        </div>
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
        <p className='py-5'>{desc.substring(0, 150)}...</p>
      </div>
    </div>
  )
}

export default Post

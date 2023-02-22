import { posts } from "@/data/data"
import { smoothHorizontalScrolling } from "@/utils/animation"
import Image from "next/image"
import { useRef } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"

function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  const handleScrollLeft = () => {
    if (sliderRef.current !== null && itemRef.current !== null) {
      const maxScroll = -sliderRef.current.scrollWidth + sliderRef.current?.clientWidth
      if(sliderRef.current.scrollLeft > maxScroll) {
        smoothHorizontalScrolling(sliderRef.current, sliderRef.current.scrollLeft - itemRef.current.clientWidth, 300)
      }
    }
  }
  const handleScrollRight = () => {
    if (sliderRef.current !== null && itemRef.current !== null) {
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current?.clientWidth
      if(sliderRef.current.scrollLeft < maxScroll) {
        smoothHorizontalScrolling(sliderRef.current, sliderRef.current.scrollLeft + itemRef.current.clientWidth, 300)
      }
    }
  }

  return (
    <div className='w-full h-full my-8 relative'>
      <div ref={sliderRef} className='overflow-hidden overflow-x-hidden  overflow-y-hidden flex gap-5'>
        {posts
          .map((post, index) => (
            <div key={index} className='cursor-pointer opacity-80 hover:opacity-100 duration-300 rounded' ref={itemRef}>
              <Image
                src={post.image}
                width={300}
                height={300}
                alt={post.title}
                className='min-w-[300px] max-h-[170px] object-cover rounded hover:scale-[1.05] duration-300'
              />
              <div className='text-left font-bold mt-2'>{post.title}</div>
            </div>
          ))
          .slice(0, 5)}
        <div
          id='prev-btn'
          className='absolute top-[85px] left-5 -translate-y-1/2 transform bg-[#ffffff85] p-2 rounded-md cursor-pointer'
          onClick={handleScrollLeft}>
          <GrPrevious fontSize={30} />
        </div>
        <div
          id='next-btn'
          className='absolute top-[85px] right-5 -translate-y-1/2 transform bg-[#ffffff85] p-2 rounded-md cursor-pointer'
          onClick={handleScrollRight}>
          <GrNext fontSize={30} />
        </div>
      </div>
    </div>
  )
}

export default Slider

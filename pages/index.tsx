import Post from "@/components/Post"
import { posts, works } from "@/data/data"
import { IPost } from "@/models/post"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <Head>
        <title>Trang Chủ</title>
        <meta name='description' content='Blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section
          id='hello'
          className='container mx-auto flex flex-col-reverse justify-center items-center pt-[33px] pb-[58px] gap-[42px] sm:flex-row lg:px-[120px]'>
          <div className='sm:flex sm:flex-col sm:basis-4/6'>
            <h1 className='text-[44px] lg:text-[48px] font-bold flex flex-col items-center sm:items-start sm:mt-[130px] gap-1'>
              <span>Hi,I am Manh,</span>
              <span>Thanks for visiting</span>
            </h1>
            <p className='text-center sm:text-left px-5 sm:px-0 mt-[20px]'>
              I am always learning and constantly absorbing new knowledge. Have good self-study skills and constantly
              update technology. I want to become a full-time employee in the company professional environment to have
              the opportunity to develop myself.
            </p>
            <div className='flex justify-center sm:justify-start mt-[27px]'>
              <button className='ita-btn-shadow bg-primary text-white dark:shadow-slate-600'>
                <a href='/CV_LuongVanManh.pdf' download>
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className='sm:flex sm:basis-2/6 sm:justify-center sm:items-center'>
            <Image
              src={"/avatar.jpg"}
              className='w-[170px] rounded-full object-cover sm:w-[200px]'
              height={100}
              width={100}
              alt='avatar'
            />
          </div>
        </section>
        <section
          id='recent-posts'
          className='container mx-auto rounded py-5 dark:bg-light dark:text-dark bg-[#EDF7FA] px-5 sm:px-10'>
          <div className='text-center sm:flex sm:justify-between sm:items-center '>
            <span className='text-lg'>Recent posts</span>{" "}
            <Link
              href='/blog'
              className='hidden sm:block text-[#23a5f0] dark:text-slate-900 hover:underline duration-300 hover:cursor-pointer transition-all'>
              View all
            </Link>
          </div>

          <div className='sm:flex sm:gap-5 sm:items-start'>
            {posts
              .map((post, index) => (
                <Post
                  key={index}
                  category={post.category}
                  desc={post.desc}
                  title={post.title}
                  tag={"2019"}
                  image={post.image}
                />
              ))
              .slice(0, 2)}
          </div>
        </section>

        <section id='works' className='container mx-auto xl:max-w-[1000px] dark:bg-dark py-5 my-10'>
          <div className='text-2xl text-center sm:text-4xl'>Top View</div>
          {works.map((work: IPost, index: number) => (
            <Post key={index} {...work} />
          ))}
        </section>
      </main>
    </>
  )
}

import Post from "@/components/Post"
import Tag from "@/components/Tag"
import { posts } from "@/data/data"
import Head from "next/head"
import { useMemo, useState } from "react"
function Blog() {
  const [selectedTag, setSelectedTag] = useState<number[]>([])
  const [filterTag, setFilterTag] = useState<string[]>([])
  const filterPosts = useMemo(() => {
    return filterTag.length > 0 ? posts.filter((post) => filterTag.every((tag) => post.category.includes(tag))) : posts
  }, [filterTag])
  let tags: string[] = []
  for (const post of posts) {
    for (const tag of post.category) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }
  const handleTag = (tag: any, index: number) => {
    if (selectedTag.includes(index)) {
      setSelectedTag(selectedTag.filter((item) => item !== index))
      setFilterTag(filterTag.filter((item) => item !== tag.innerText))
    } else {
      setSelectedTag([...selectedTag, index])
      setFilterTag([...filterTag, tag.innerText])
    }
  }
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name='description' content='Blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-7 lg:px-24 container mx-auto'>
        <div className='font-bold text-4xl lg:text-5xl mt-10 mb-10 px-2 ita-title-underlined'>Blogs</div>
        <div className='flex gap-3 flex-wrap'>
          {tags.map((tag: string, index: number) => (
            <Tag
              classes={`${
                selectedTag.includes(index) ? "shadow-primary shadow-md dark:shadow-secondary dark:shadow-md" : ""
              }`}
              onClick={(e) => handleTag(e.target, index)}
              key={index}
              text={tag}
            />
          ))}
        </div>
        {filterPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </main>
    </>
  )
}

export default Blog

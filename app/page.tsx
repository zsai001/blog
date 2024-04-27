import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts_all = allCoreContent(sortedPosts)
  // const posts = posts_all.map((post) => post.draft !== true)
  return <Main posts={posts_all} />
}

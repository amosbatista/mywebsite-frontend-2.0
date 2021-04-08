const service = async (request) => {
  
  const response = await request.get(
    `${process.env.BLOG_URL}/home`
  )
  const posts = response.data || []

  return posts.map((post)=>{
    return {
      title: post.title,
      description: post.custom_excerpt,
      thumbnail: post.feature_image,
      slug: post.slug,
      url: `/caderno1/${post.slug}`,
      id: post.id,
      content: post.content,
    }
  })

}

export default service
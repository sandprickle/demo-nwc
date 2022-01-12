import { BlogPost } from './blog-post.js'
import { BlogPostList } from './blog-post-list.js'

let blogPostsElement = document.getElementById('blog-posts')

blogPostsElement.posts = [
  {
    title: 'How to stop sucking the life out of your lunches',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    title: 'Be Great. Then just suck.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    title: "It's a dudebro thing",
    description:
      'Toxicity reigns. Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    title: 'Everything is something, at least for now',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    title: 'Whinnie the Pooh is actually a demon.',
    description:
      'But we love him all the more for it. Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    title: 'How to stop sucking the life out of you',
    description:
      'Yeah you read that right. Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
]

export class BlogPostList extends HTMLElement {
  #posts = ''

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  set posts(value) {
    this.#posts = value
    this.render()
  }

  get style() {
    return `
			<style>
				:host {
					display: block;
				}
				:host * {
					box-sizing: border-box;
				}
				.blog-posts .posts {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
					grid-auto-rows: 1fr;
					grid-gap: 25px;
				}
			</style>
		`
  }

  render() {
    this.shadowRoot.innerHTML = `
			${this.style}
			<section class="blog-posts">
				<slot name="heading"><h2>Blog Posts</h2></slot>
				<div class="posts"> 
					${this.#posts
            .map(
              (post) => `
						<blog-post
							title="${post.title || ''}"
							description="${post.description || ''}"
							link="${post.link || ''}"
							thumbnail="${post.thumbnail || ''}"
						></blog-post>
					`
            )
            .join('')}
				</div>
			</section>
		`
  }
}

customElements.define('blog-post-list', BlogPostList)

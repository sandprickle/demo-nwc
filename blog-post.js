export class BlogPost extends HTMLElement {
  title = ''
  description = ''
  link = ''
  thumbnail = ''

  constructor() {
    super()
    this.attachShadow({ mode: 'open', delegatesFocus: true })
    this.render()
  }

  static get observedAttributes() {
    return ['title', 'description', 'link', 'thumbnail']
  }

  connectedCallback() {}

  attributeChangedCallback(attName, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch (attName) {
        case 'title':
          this.title = newValue || 'Untitled'
          break
        case 'description':
          this.description = newValue || ''
          break
        case 'link':
          this.link = newValue || '/'
          break
        case 'thumbnail':
          this.thumbnail = newValue || 'https://via.placeholder.com/350x150'
          break
      }
      this.render()
    }
  }
  get template() {
    return `
		<div class="blog-post">
			<div class="thumbnail" style="overflow: hidden;">
				${
          this.thumbnail
            ? `<img src="${this.thumbnail}" style="width: 100%;" alt="${this.title}">`
            : ''
        }
			</div>
			<h3>${this.title}</h3>
			<p>${this.description}</p>
			<a href="${this.link}" style="outline:none;">Read More</a>
		</div>`
  }
  render() {
    this.shadowRoot.innerHTML = this.template
  }
}

customElements.define('blog-post', BlogPost)

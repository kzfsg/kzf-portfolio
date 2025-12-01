import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Design conferences in 2022',
      category: 'Design',
      date: '2022-02-23',
      dateDisplay: 'Fab 23, 2022',
      image: '/assets/images/blog-1.jpg',
      description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      title: 'Best fonts every designer',
      category: 'Design',
      date: '2022-02-23',
      dateDisplay: 'Fab 23, 2022',
      image: '/assets/images/blog-2.jpg',
      description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
      title: 'Design digest #80',
      category: 'Design',
      date: '2022-02-23',
      dateDisplay: 'Fab 23, 2022',
      image: '/assets/images/blog-3.jpg',
      description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
      title: 'UI interactions of the week',
      category: 'Design',
      date: '2022-02-23',
      dateDisplay: 'Fab 23, 2022',
      image: '/assets/images/blog-4.jpg',
      description: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
      title: 'The forgotten art of spacing',
      category: 'Design',
      date: '2022-02-23',
      dateDisplay: 'Fab 23, 2022',
      image: '/assets/images/blog-5.jpg',
      description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Design digest #79',
      category: 'Design',
      date: '2022-02-23',
      dateDisplay: 'Fab 23, 2022',
      image: '/assets/images/blog-6.jpg',
      description: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    }
  ];

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <li className="blog-post-item" key={index}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.dateDisplay}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;

import React from 'react';

export default function Content() {
  const posts = [
    // Post 1
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      imageUrl:
        'https://www.healthifyme.com/blog/wp-content/uploads/2022/01/Junk-Food-More-Harm-and-Lesser-Well-being.jpeg', // Add the URL of the image for this post
    },
    // Post 2
    {
      id: 2,
      title: 'Maximize your social media reach',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptate repudiandae ut repellat dignissimos. Est necessitatibus perspiciatis quidem qui quo dolorum aut.',
      date: 'Apr 1, 2020',
      datetime: '2020-04-01',
      category: { title: 'Social Media', href: '#' },
      author: {
        name: 'Jennifer Larson',
        role: 'Marketing Manager',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f6d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C2f4MDxJ_Hb7CJDOy_FpQ9zdwK4X74_cfg&usqp=CAU', // Add the URL of the image for this post
    },
    // Post 3
    {
      id: 3,
      title: 'The importance of branding',
      href: '#',
      description:
        'Voluptate ea qui deserunt mollitia. Consequatur doloribus id possimus quo aut. Nihil dolore autem aut voluptatem consectetur qui.',
      date: 'May 12, 2020',
      datetime: '2020-05-12',
      category: { title: 'Branding', href: '#' },
      author: {
        name: 'Emily Johnson',
        role: 'Graphic Designer',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1522075469751-3a6694fb2f6d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzM3adpW3iILmW4Lq5otwBCUQhX2cKgN-jtg&usqp=CAU', // Add the URL of the image for this post
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div
        className="bg-bg-heading flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            'url(https://img.freepik.com/free-vector/flower-desktop-wallpaper-background-vector_53876-144449.jpg?w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Adjust the height as needed
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-4">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center mb-8">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between bg-beige-dark p-6 rounded-lg">
              <div className="relative">
                <a href={post.href}>
                  <img src={post.imageUrl} alt="" className="w-full h-48 object-cover rounded-t-lg" />
                </a>
              </div>
              <div className="flex items-center gap-x-4 text-xs mt-4">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

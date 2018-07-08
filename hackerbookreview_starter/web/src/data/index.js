export default {
  reviews: [
    {
      id: '6',
      title: 'Must Read',
      rating: 5,
      comment:
        'A must-read for any entrepreneur who wants to make a difference.',
      user: {
        name: 'jane',
      },
      book: {
        id: '1',
        title: 'Zero to One',
        description:
          'The billionaire Silicon Valley entrepreneur behind such companies as PayPal and Facebook outlines an innovative theory and formula for building the companies of the future by creating and monopolizing new markets instead of competing in old ones. 200,000 first printing.',
        rating: 5,
        imageUrl:
          '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=1&id=POOJDQAAQBAJ',
      },
    },
    {
      id: '5',
      title: 'words for how I feel',
      rating: 5,
      comment:
        'Have you ever read an article or book that defined something that you’ve abstractly believed for years? When you read it you let out an affirmative mental “aha!”. I had one of these moments recently when I read Zero to One by Peter Thiel. This book helped shape and better define my investment strategy.',
      user: {
        name: 'joe',
      },
      book: {
        id: '1',
        title: 'Zero to One',
        description:
          'The billionaire Silicon Valley entrepreneur behind such companies as PayPal and Facebook outlines an innovative theory and formula for building the companies of the future by creating and monopolizing new markets instead of competing in old ones. 200,000 first printing.',
        rating: 5,
        imageUrl:
          '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=1&id=POOJDQAAQBAJ',
      },
    },
    {
      id: '4',
      title: 'stimulating',
      rating: 5,
      comment:
        'Zero to One is a refreshing intellectual deep dive into the motives behind entrepreneurship.',
      user: {
        name: 'knowthen',
      },
      book: {
        id: '1',
        title: 'Zero to One',
        description:
          'The billionaire Silicon Valley entrepreneur behind such companies as PayPal and Facebook outlines an innovative theory and formula for building the companies of the future by creating and monopolizing new markets instead of competing in old ones. 200,000 first printing.',
        rating: 5,
        imageUrl:
          '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=1&id=POOJDQAAQBAJ',
      },
    },
    {
      id: '3',
      title: 'how good is it?',
      rating: 5,
      comment: 'Worth every penny!',
      user: {
        name: 'jane',
      },
      book: {
        id: '2',
        title: 'Design for hackers',
        description:
          'Looks at classical design principles and techniques for Web designers using a "reverse-engineering" process, with information on such topics as color, proportion, white space, composition, and typographic etiquette.',
        rating: 4.333333333333333,
        imageUrl:
          '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=1&id=9ZNHCElMv9EC',
      },
    },
    {
      id: '2',
      title: 'not clueless anymore',
      rating: 4,
      comment:
        'After reading this book, I feel like I have a clue about design!',
      user: {
        name: 'joe',
      },
      book: {
        id: '2',
        title: 'Design for hackers',
        description:
          'Looks at classical design principles and techniques for Web designers using a "reverse-engineering" process, with information on such topics as color, proportion, white space, composition, and typographic etiquette.',
        rating: 4.333333333333333,
        imageUrl:
          '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=1&id=9ZNHCElMv9EC',
      },
    },
    {
      id: '1',
      title: 'read early',
      rating: 4,
      comment: "I wish that I'd found this book a long time ago",
      user: {
        name: 'knowthen',
      },
      book: {
        id: '2',
        title: 'Design for hackers',
        description:
          'Looks at classical design principles and techniques for Web designers using a "reverse-engineering" process, with information on such topics as color, proportion, white space, composition, and typographic etiquette.',
        rating: 4.333333333333333,
        imageUrl:
          '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=1&id=9ZNHCElMv9EC',
      },
    },
  ],
  books: [
    {
      id: '1',
      title: 'Zero to One',
      description:
        'The billionaire Silicon Valley entrepreneur behind such companies as PayPal and Facebook outlines an innovative theory and formula for building the companies of the future by creating and monopolizing new markets instead of competing in old ones. 200,000 first printing.',
      rating: 5,
      imageUrl:
        '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=0&id=POOJDQAAQBAJ',
      authors: [
        {
          name: 'Peter Thiel',
        },
        {
          name: 'Blake Masters',
        },
      ],
      reviews: [
        {
          id: '1',
          title: 'stimulating',
          rating: 5,
          comment:
            'Zero to One is a refreshing intellectual deep dive into the motives behind entrepreneurship.',
          user: {
            name: 'knowthen',
            imageUrl:
              '//www.gravatar.com/avatar/2a964ae2a7deac996cc96a4a03d36af2?s=50',
          },
        },
        {
          id: '2',
          title: 'words for how I feel',
          rating: 5,
          comment:
            'Have you ever read an article or book that defined something that you’ve abstractly believed for years? When you read it you let out an affirmative mental “aha!”. I had one of these moments recently when I read Zero to One by Peter Thiel. This book helped shape and better define my investment strategy.',
          user: {
            name: 'joe',
            imageUrl:
              '//www.gravatar.com/avatar/66fb4a60ad325eb5ded7c3e984cb870c?s=50',
          },
        },
        {
          id: '3',
          title: 'Must Read',
          rating: 5,
          comment:
            'A must-read for any entrepreneur who wants to make a difference.',
          user: {
            name: 'jane',
            imageUrl:
              '//www.gravatar.com/avatar/0092273ac34f8cf86995e46ba9fef42a?s=50',
          },
        },
      ],
    },
    {
      id: '2',
      title: 'Design for hackers',
      description:
        'Looks at classical design principles and techniques for Web designers using a "reverse-engineering" process, with information on such topics as color, proportion, white space, composition, and typographic etiquette.',
      rating: 4.333333333333333,
      imageUrl:
        '//books.google.com/books/content?printsec=frontcover&img=1&edge=curl&source=gbs_api&zoom=0&id=9ZNHCElMv9EC',
      authors: [
        {
          name: 'David Kadavy',
        },
      ],
      reviews: [
        {
          id: '4',
          title: 'read early',
          rating: 4,
          comment: "I wish that I'd found this book a long time ago",
          user: {
            name: 'knowthen',
            imageUrl:
              '//www.gravatar.com/avatar/2a964ae2a7deac996cc96a4a03d36af2?s=50',
          },
        },
        {
          id: '5',
          title: 'not clueless anymore',
          rating: 4,
          comment:
            'After reading this book, I feel like I have a clue about design!',
          user: {
            name: 'joe',
            imageUrl:
              '//www.gravatar.com/avatar/66fb4a60ad325eb5ded7c3e984cb870c?s=50',
          },
        },
        {
          id: '6',
          title: 'how good is it?',
          rating: 5,
          comment: 'Worth every penny!',
          user: {
            name: 'jane',
            imageUrl:
              '//www.gravatar.com/avatar/0092273ac34f8cf86995e46ba9fef42a?s=50',
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      imageUrl:
        'http://books.google.com/books/content?id=9ZNHCElMv9EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      title: 'Design for hackers',
      authors: ['David Kadavy'],
      description:
        'Looks at classical design principles and techniques for Web designers using a "reverse-engineering" process, with information on such...',
    },
  ],
};

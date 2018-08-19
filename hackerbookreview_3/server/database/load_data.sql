begin;

SET CLIENT_ENCODING TO 'utf8';

insert into hb.author(id, name) values
  (1, 'David Kadavy'),
  (2, 'Peter Thiel'),
  (3, 'Blake Masters');

-- update tokens column for full text search
update hb.author set tokens = to_tsvector(name);

-- reset next sequence used for id column.  Next id should be 4
-- since 1, 2 & 3 were used above
alter sequence hb.author_id_seq restart with 4;

insert into hb.book(id, google_id, title, subtitle, description, page_count, rating_total, rating_count, rating ) values
  (1, 'POOJDQAAQBAJ', 'Zero to One', 'Notes on Startups, Or how to Build the Future', 'The billionaire Silicon Valley entrepreneur behind such companies as PayPal and Facebook outlines an innovative theory and formula for building the companies of the future by creating and monopolizing new markets instead of competing in old ones. 200,000 first printing.', 210, 15, 3, 15.0/3.0),
  (2, '9ZNHCElMv9EC', 'Design for hackers', 'Reverse Engineering Beauty', 'Looks at classical design principles and techniques for Web designers using a "reverse-engineering" process, with information on such topics as color, proportion, white space, composition, and typographic etiquette.', 338, 13, 3, 13.0/3.0 );

-- update tokens column for full text search
update hb.book set tokens = to_tsvector(coalesce(title, '') || coalesce(subtitle, '') || coalesce(description, ''));

-- reset next sequence used for id column.
alter sequence hb.book_id_seq restart with 3;

insert into hb.book_author(id, book_id, author_id) values
  (1, 1, 2),
  (2, 1, 3),
  (3, 2, 1);

-- reset next sequence used for id column.
alter sequence hb.book_author_id_seq restart with 4;

insert into hb.user(id, email, name) values 
  (1, 'james@knowthen.com', 'knowthen'),
  (2, 'joe@mail.com', 'joe'),
  (3, 'jane@mail.com', 'jane');

-- update tokens column for full text search
update hb.user set tokens = to_tsvector(name);

-- reset next sequence used for id column.
alter sequence hb.user_id_seq restart with 4;

insert into hb.review(id, user_id, book_id, rating, title, comment) values 
  (1, 1, 2, 4, 'read early', 'I wish that I''d found this book a long time ago'),
  (2, 2, 2, 4, 'not clueless anymore', 'After reading this book, I feel like I have a clue about design!'),
  (3, 3, 2, 5, 'how good is it?', 'Worth every penny!'),
  (4, 1, 1, 5, 'stimulating','Zero to One is a refreshing intellectual deep dive into the motives behind entrepreneurship.' ),
  (5, 2, 1, 5, 'words for how I feel', 'Have you ever read an article or book that defined something that you’ve abstractly believed for years? When you read it you let out an affirmative mental “aha!”. I had one of these moments recently when I read Zero to One by Peter Thiel. This book helped shape and better define my investment strategy.'),
  (6, 3, 1, 5, 'Must Read', 'A must-read for any entrepreneur who wants to make a difference.');

-- update tokens column for full text search
update hb.review set tokens = to_tsvector(coalesce(title, '') || coalesce(comment, ''));

-- reset next sequence used for id column.
alter sequence hb.review_id_seq restart with 7;

commit;
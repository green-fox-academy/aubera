'use strict';

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(auth: string, head: string, date: string, body: string = '') {
    this.authorName = auth;
    this.title = head;
    this.publicationDate = date;
    this.text = body;
  }
}

let blogPost1 = new BlogPost('John Doe', 'Lorem Ipsum', '2000.05.04');
blogPost1.text = 'Lorem ipsum dolor sit amet';

let blogPost2 = new BlogPost('Tim Urban', 'Wait but why', '2010.10.10');
blogPost2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';

let blogPost3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', '2017.03.28');
blogPost3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';

console.log(blogPost1);
console.log(blogPost2);
console.log(blogPost3);

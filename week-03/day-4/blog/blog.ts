'use strict';
import { BlogPost } from './blog-post'

class Blog {
  blogPosts: BlogPost[] = [];

  constructor(blogPosts: BlogPost[]) {
    this.blogPosts = blogPosts;
  }

  add(blogPost: BlogPost): void {
    this.blogPosts.push(blogPost);
    console.log('One item added');
  }

  delete(index: number): void {
    this.blogPosts.splice(index, 1);
    console.log('One item deleted');
  }

  update(index: number, blogPost: BlogPost): void {
    this.blogPosts.splice(index, 1, blogPost);
    console.log('One item updated');
  }

}

let blogPost1: BlogPost = new BlogPost('John Doe', 'Lorem Ipsum', '2000.05.04');
blogPost1.text = 'Lorem ipsum dolor sit amet';
let blogPost2: BlogPost = new BlogPost('Tim Urban', 'Wait but why', '2010.10.10');
blogPost2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
let blogPost3: BlogPost = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', '2017.03.28');
blogPost3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
let blogPost4: BlogPost = new BlogPost('Andor', 'Some test title', '2019.04.18');
blogPost4.text = 'Some test text.';


let blogPosts: BlogPost[] = [];
blogPosts.push(blogPost1, blogPost2, blogPost3);

let myFirstBlog: Blog = new Blog(blogPosts);

console.log(myFirstBlog.blogPosts.length);
myFirstBlog.delete(1);
myFirstBlog.update(0, blogPost4);
console.log(myFirstBlog.blogPosts.length);
console.log(myFirstBlog.blogPosts);

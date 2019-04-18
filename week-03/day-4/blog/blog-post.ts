'use strict';

export class BlogPost {
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

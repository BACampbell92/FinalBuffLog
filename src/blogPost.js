export default class BlogPost {
  constructor(id, title, author, dateCreated, body, tags, comments) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.dateCreated = dateCreated;
    this.body = body;
    this.comments = comments;
  }
}

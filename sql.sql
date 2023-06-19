create database Social
use Social

CREATE TABLE Users (
  user_id INT PRIMARY KEY,
  username VARCHAR(200),
  email VARCHAR(200),
  password VARCHAR(200)
);

insert into Users (user_id,username,email,password) values (user_id,username,@email,@password)
select * from Users
CREATE TABLE Posts (
  post_id INT PRIMARY KEY,
  title VARCHAR(200),
  content TEXT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Comments (
  comment_id INT PRIMARY KEY,
  content TEXT,
  user_id INT,
  post_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  FOREIGN KEY (post_id) REFERENCES Posts(post_id)
);

INSERT INTO Users (user_id, username, email, password)
VALUES
  (1, 'John', 'john@example.com', 'password123'),
  (2, 'Emma', 'emma@example.com', 'abcdefg123'),
  (3, 'Mike', 'mike@example.com', 'qwerty456');


  INSERT INTO Posts (post_id, title, content, user_id)
VALUES
  (1, 'First Post', 'This is my first post. Welcome to my blog!', 1),
  (2, 'Hello World', 'Hello, world!', 2),
  (3, 'Topic Discussion', 'Lets discuss interesting topics here.', 3);

  INSERT INTO Comments (comment_id, content, user_id, post_id)
VALUES
  (1, 'Great post!', 2, 1),
  (2, 'I totally agree.', 1, 1),
  (3, 'Nice job!', 3, 2);

  select * from Users
    select * from Posts
  select * from Comments


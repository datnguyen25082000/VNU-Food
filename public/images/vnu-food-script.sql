DROP DATABASE IF EXISTS vnu_food;
CREATE DATABASE vnu_food;
USE vnu_food;

CREATE TABLE users (
	userUsername varchar(20),
    userPassword varchar(200) NOT NULL,
    userType int NOT NULL,
    userEmail varchar(30) UNIQUE,
    userAvatar varchar(100),
    userDisplayName nvarchar(30) NOT NULL,
    userIntro nvarchar(1000),
    PRIMARY KEY (userUsername)
);

CREATE TABLE posts (
	postID int AUTO_INCREMENT,
    postUser varchar(20),
    postDetail nvarchar(1000),
    postDes nvarchar(1000),
    postVote float,
	PRIMARY KEY (postID),
    FOREIGN KEY (postUser) REFERENCES users(userUsername)
);

CREATE TABLE comments (
	commentID int AUTO_INCREMENT,
	commentPost int,
    commentUser varchar(20),
    commentContent nvarchar(1000),
	PRIMARY KEY (commentID, commentPost, commentUser),
    FOREIGN KEY (commentUser) REFERENCES users(userUsername),
    FOREIGN KEY (commentPost) REFERENCES posts(postID)
);

CREATE TABLE mydiners (
	mydinerPost int,
    mydinerUser varchar(20),
	PRIMARY KEY (mydinerPost, mydinerUser),
    FOREIGN KEY (mydinerUser) REFERENCES users(userUsername),
    FOREIGN KEY (mydinerPost) REFERENCES posts(postID)
);

CREATE TABLE hashtags (
	hashtagID int,
    hashtagContent nvarchar(100),
	PRIMARY KEY (hashtagID)
);

CREATE TABLE post_hashtag (
	postID int,
    hashtagID int,
	PRIMARY KEY (postID, hashtagID),
    FOREIGN KEY (hashtagID) REFERENCES hashtags(hashtagID),
    FOREIGN KEY (postID) REFERENCES posts(postID)
);

USE vnu_food;

INSERT INTO users (userUsername, userPassword, userType, userEmail, userDisplayName, userIntro)
VALUES 
('admin', '1', 0, 'admin@gmail.com', 'Admin Name', ''),
('user', '1', 1, 'user@gmail.com', 'User Name', 'Hi, I am a user');

INSERT INTO hashtags(hashtagID, hashtagContent)
VALUES
(1, 'bữa sáng'),
(2, 'bữa trưa'),
(3, 'bữa tối'),
(4, 'ngon'),
(5, 'rẻ'),
(6, 'sạch'),
(7, 'tốt')
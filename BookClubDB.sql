-- Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    UserName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    RegistrationDate DATE,
    UserRole VARCHAR(50)
);

-- Categories Table
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL,
    Description TEXT
);

-- Books Table
CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(255) NOT NULL,
    PublicationYear INT,
    ISBN VARCHAR(20),
    Genre VARCHAR(100),
    Price DECIMAL(10, 2),
    CategoryID INT, -- Yeni eklendi
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) -- Yeni eklendi
);

-- BlogPosts Table
CREATE TABLE BlogPosts (
    PostID INT PRIMARY KEY,
    UserID INT,
    Title VARCHAR(255) NOT NULL,
    Content TEXT,
    DatePosted DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Reviews Table
CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY,
    UserID INT,
    BookID INT,
    Rating INT,
    Comment TEXT,
    DatePosted DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID)
);



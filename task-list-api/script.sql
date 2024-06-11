CREATE TABLE Task (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);


INSERT INTO Task (title, status, createdAt, updatedAt)
VALUES ('Task 1', 'Pending', NOW(), NOW());

INSERT INTO Task (title, status, createdAt, updatedAt)
VALUES ('Task 2', 'Completed', NOW(), NOW());

INSERT INTO Task (title, status, createdAt, updatedAt)
VALUES ('Task 3', 'Completed', NOW(), NOW());

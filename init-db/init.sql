CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    activity_type VARCHAR(50),
    status VARCHAR(50),
    summary TEXT,
    description TEXT,
    priority VARCHAR(50),
    reporter VARCHAR(255),
    assignee VARCHAR(255),
    precondition TEXT,
    creation_date DATE,
    closing_date DATE,
    sprint VARCHAR(100)
);
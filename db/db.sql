CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS properties (
    id SERIAL PRIMARY KEY,
    property_name TEXT,
    description TEXT,
    address TEXT,
    city TEXT,
    state VARCHAR(2),
    zip VARCHAR(10),
    image TEXT,
    loan DECIMAL(10,2),
    mortgage FLOAT,
    rent DECIMAL(10,2),
    user_id INT REFERENCES users (id)
);
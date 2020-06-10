export interface User {
    email: String;
    password: String;
};

export interface Task {
    _id: number;
    name: string;
    description: string;
    date: string;
}
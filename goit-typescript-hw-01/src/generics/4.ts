type User1 = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser<T extends Partial<User1>>(initialValues: T) {
    // Оновлення користувача
}

createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
});
  
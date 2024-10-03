interface Address {
    city: string;
    country: string;
  }
  
interface User {
    name: string;
    age: number;
    email: string;
    address?: Address;
}

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};
    
const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};  
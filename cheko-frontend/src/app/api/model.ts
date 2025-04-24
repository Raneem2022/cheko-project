export const fetchMenu = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/menu');
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching menu data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

export const fetchCategories = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/menu/categories');
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching menu data:', error);
        throw error; // Re-throw the error for handling in the component
    }
};

export  const fetchMenuByCategory = async (categoryName: string) => {
    try {
        const response = await fetch(`http://localhost:8080/api/menu/category/${categoryName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories data:', error);
        throw  error
    }
};



export  const fetchCountItemsByCategory = async (categoryName: string) => {
    try {
        const response = await fetch(`http://localhost:8080/api/menu/category/${categoryName}/count`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories data:', error);
        throw  error
    }
};
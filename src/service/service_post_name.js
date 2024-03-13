import axios from 'axios';

export const postName = async (name) => {
    try {
        const response = await axios.post('https://babynames-backend.onrender.com/api/post_name', {
            name: name
        });
        return response.data
    } catch (error) {
        console.error('Error:', error);
    }
};
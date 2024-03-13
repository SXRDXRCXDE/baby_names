import axios from 'axios';

export const getRandomNames = async () => {
    try {
        const response = await axios.get('https://babynames-backend.onrender.com/api/get_random_names');
        // console.log('Response:', response.data);
        return response.data
    } catch (error) {
        console.error('Error:', error);
    }
};

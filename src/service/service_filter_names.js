import axios from "axios";

export const sendFilters = async (startLetter,endLetter,nameLength,gender,birthYear,sortOrder) => {
    try {
        const filters = {
            first_letter: startLetter,
            last_letter: endLetter,
            name_length: nameLength,
            m_gender: gender,
            f_gender: gender,
            birth_year: birthYear,
            sort_order: sortOrder
        };

        const response = await axios.post('https://babynames-backend.onrender.com/api/filter_names', { filters });
        return response.data



    } catch (error) {
        console.error('Error sending filters:', error);
    }
};

export const sendFiltersWithSlug = async (slug) => {
    try {
        const filters = {
            slug_input : slug
        };

        const response = await axios.post('https://babynames-backend.onrender.com/api/filter_names', { filters });
        return response.data



    } catch (error) {
        console.error('Error sending filters:', error);
    }
};
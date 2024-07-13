import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Alert from '@mui/material/Alert';

export default function useApiCalls() {
    const navigate = useNavigate();
    const logout = async () => {
        try {
            Cookies.remove('name', { path: '', domain: process.env.REACT_APP_BASE_URL })
            navigate('/login');

        } catch (error) {
            navigate('/Error/page/505')
        }
    };

    const apiCalls = async (endpoint = '', method, data = null, headers = {}, base_url = process.env.REACT_APP_BASE_URL, params = {}) => {
        const token = Cookies.get('token');
    
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
    
        try {
            let queryParams = '';
            if (params) {
                queryParams = new URLSearchParams(params).toString();
            }
    
            const config = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: data ? JSON.stringify(data) : undefined,
            };
    
            const endpointUrl = `${base_url}${endpoint ? '/' + endpoint : ''}${queryParams ? '?' + queryParams : ''}`;
    
            console.log(`${method} - ${endpointUrl}`);
            console.log('payload', JSON.stringify(data));
    
            const response = await fetch(endpointUrl, config);
            const responseData = await response.json();
    
            console.log('responseData', responseData);
    
            if (response.status === 500) {
                if (['Signature has expired', 'Session Expired, please re-login'].includes(responseData.msg)) {
                    // Show alert message (you might want to replace this with a better solution)
                    alert(responseData.msg); // Replace with MUI Snackbar or Alert as needed
                    await logout();
                }
            } 
    
            return {
                status: response.status,
                data: responseData,
            };
        } catch (error) {
            console.error('API call error:', error);
            navigate('/Error/page/505');
        }
    };
    

    return apiCalls;
}

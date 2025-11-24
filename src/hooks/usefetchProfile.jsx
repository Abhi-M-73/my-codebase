import { useQuery } from '@tanstack/react-query'
import { getUserProfile } from '../api/user.api'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';

const useFetchProfile = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    return useQuery({
        queryKey: ['fetchProfile'],
        queryFn: getUserProfile,
        enabled: !!token,
        // staleTime: 10 * 60 * 1000,
        onSuccess: (res) => {
            dispatch(setUser(res?.data)); 
        }
    });
}

export default useFetchProfile;

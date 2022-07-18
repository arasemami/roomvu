import { useSelector, shallowEqual } from 'react-redux';

const useTheme = () => useSelector((state: any) => state.theme, shallowEqual);

export { useTheme };

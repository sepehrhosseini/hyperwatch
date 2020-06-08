import { useLocation, useParams } from 'react-router-dom';

export const useQuery = () =>
  Object.fromEntries(new URLSearchParams(useLocation().search));

export const useQueryParams = () => ({
  ...useParams(),
  ...useQuery(),
});

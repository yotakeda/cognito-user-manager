import { useRouter } from "next/router";

export const useQueryParams = () => {
  const router = useRouter();
  const username = router.query.username as string | undefined;
  return {
    username: encodeURIComponent(String(username)),
  };
};

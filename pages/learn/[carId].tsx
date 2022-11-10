import { NextRouter, useRouter } from "next/router";

const Learn = () => {
  const router: NextRouter = useRouter();
  const { carId } = router.query;

  return <h3>Learn: {carId}</h3>;
};

export default Learn;

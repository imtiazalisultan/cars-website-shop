import { NextRouter, useRouter } from "next/router";

const Shop = () => {
  const router: NextRouter = useRouter();
  const { carId } = router.query;

  return <h3>Shop: {carId}</h3>;
};

export default Shop;

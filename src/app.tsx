import {
  chain,
  configureChains,
  createClient,
  useBalance,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { constants } from "ethers";

const { provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
});

const Component = () => {
  const balance = useBalance({
    addressOrName: constants.AddressZero,
    cacheTime: 30_000,
  });
  console.log(balance);
  return null;
};

export const App = () => {
  return (
    <WagmiConfig client={client}>
      <Component />
    </WagmiConfig>
  );
};

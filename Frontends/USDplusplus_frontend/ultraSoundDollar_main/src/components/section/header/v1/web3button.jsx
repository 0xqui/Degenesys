import { Web3Button} from "@web3modal/react";


export default function web3button() {
  return (
    <>
      {/* Predefined button  */}
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
    </>
  );
}
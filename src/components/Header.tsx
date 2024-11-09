import { Button } from "@/components/ui/button";
import { useConnection, useActiveAddress } from "arweave-wallet-kit";

export function Header() {
  const { connected, connect, disconnect } = useConnection();
  const address = useActiveAddress();

  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-[2.5rem] font-bold">ARFlip</span>
      </div>

      {!connected ? (
        <Button
          className="py-6 px-6 text-[1.2rem]"
          onClick={connect}
          disabled={connected}
        >
          {connected ? "Connecting..." : "Connect Wallet"}
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            className="text-white bg-black hover:bg-[#1e1e1e] hover:text-white"
            variant="outline"
            onClick={disconnect}
          >
            <p>{address}</p>
          </Button>
        </div>
      )}
    </div>
  );
}

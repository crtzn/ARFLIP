"use client";

import { Button } from "@/components/ui/button";

const Main = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-xl text-black">ARFLIP NOW!</h1>
        <div id="header-title" className="flex gap-5 justify-center">
          <Button>HEADS</Button>
          <Button>TAILS</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;

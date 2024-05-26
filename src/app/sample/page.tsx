import React from "react";
import * as SampleComponents from "@/features/sample/components/index";

const Sample = () => {
  return (
    <div>
      <div>
        <SampleComponents.SampleCard />
        <SampleComponents.SampleList />
      </div>
    </div>
  );
};

export default Sample;

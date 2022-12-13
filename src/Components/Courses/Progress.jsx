import React from "react";
import { Flex } from "../shared/Flex";
import { ProgressBackground, ProgressLine, ProgressPercentage } from "./styles";

export default function Progress({ pg, total }) {
  return (
    <Flex>
      <ProgressBackground>
        <ProgressLine w={pg / total} />
      </ProgressBackground>
      <ProgressPercentage>
        {pg} / {total}
      </ProgressPercentage>
    </Flex>
  );
}

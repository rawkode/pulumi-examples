import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";

import { ClusterConfig, clusterSchema } from "./config.js";

const config = new pulumi.Config();
const clusterConfigs: ClusterConfig = config.requireObject("clusters");
await clusterSchema.validate(clusterConfigs);

clusterConfigs?.map((clusterConfig) => {
  new random.RandomString(clusterConfig.name, {
    length: clusterConfig.maxSize,
  });
});

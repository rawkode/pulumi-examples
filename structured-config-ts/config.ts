import { array, object, string, number, InferType } from "yup";

export const clusterSchema = array().of(
  object({
    name: string().required(),
    bottleRocketVersion: string().required(),
    diskSizeGB: number().positive().required(),
    instanceTypes: array()
      .of(string().oneOf(["m6i.xlarge", "m5.xlarge"]))
      .required(),
    minSize: number().positive().required(),
    maxSize: number().positive().required(),
    desiredSize: number().positive().required(),
    maxUnavailable: number().positive().required(),
  })
);

export type ClusterConfig = InferType<typeof clusterSchema>;

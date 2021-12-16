import * as kx from "@pulumi/kubernetesx";

const nginxPod = new kx.PodBuilder({
  containers: [
    {
      image: "nginx:1.21",
      ports: [{ containerPort: 80 }],
    },
  ],
});

const nginxDeployment = new kx.Deployment("nginx", {
  metadata: {
    labels: {
      owner: "team-platform",
    },
  },
  spec: nginxPod.asDeploymentSpec(),
}).createService({
  ports: [{ port: 80, targetPort: 80 }],
});

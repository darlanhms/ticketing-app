import axios, { AxiosInstance } from 'axios';
import { IncomingMessage } from 'http';

interface BuildClientProps {
  req: IncomingMessage;
}

export default function buildClient({ req }: BuildClientProps): AxiosInstance {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers as any,
    });
  }

  return axios.create();
}

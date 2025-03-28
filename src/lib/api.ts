import ky from 'ky';

import { API_URL } from '@/config';

const kyConfig = ky.create({
  prefixUrl: API_URL,
  timeout: false,
  retry: 1,
});

const api = {
  authorized: () =>
    kyConfig.extend({
      hooks: {
        beforeRequest: [],
      },
    }),
  unauthorized: () =>
    kyConfig.extend({
      hooks: {
        beforeRequest: [],
      },
    }),
};

export default api;

import { check } from 'k6'
import http from 'k6/http'

export default function main() {
  const res = http.get('http://test.k6.io/');
  // console.log will be represented as logs in Loki
  console.log('got a response')
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
// export const environment = {
//   production: true
// };
export const environment = {
  production: true,
  server_port: 3000,
  get API_URL() { return `http://${window.location.hostname}:${this.server_port}`; },
 
};

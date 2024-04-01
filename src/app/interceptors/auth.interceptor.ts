import { HttpInterceptorFn, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { map, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // const authToken = 'YOUR_AUTH_TOKEN_HERE';
  // // Clone the request and add the authorization header
  // const authReq = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${authToken}`
  //   }
  // });
  // Pass the cloned request with the updated header to the next handler
  return next(req);
};

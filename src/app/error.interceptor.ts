import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        console.log("Errore dall'interceptor", request);
        return throwError(() => new error(error));
      })
    );
  }
  // .pipe(
  //   catchError((error) => {
  //     let message = '';
  //     if (error.status === 404) {
  //       message = 'Non ho trovato nulla';
  //     } else if (error.status === 500) {
  //       message = 'Errore nella richiesta';
  //     }
  //     console.error(message); // Mostra il messaggio di errore nella console
  //     // puoi anche restituire un errore specifico se necessario
  //     return throwError(() => new Error(message));
  //   })
  // );

  // intercept(
  //   request: HttpRequest<unknown>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<unknown>> {
  //   return next.handle(request).pipe(
  //     catchError((error) => {
  //       return throwError(() => {
  //         let message = '';
  //         if (error.status === 404) {
  //           message = ' non ho trovato nulla ';
  //         } else if (error.status === 500) {
  //           message = ' errore nella richiesta ';
  //         }
  //         return message;
  //       });
  //     })
  //   );
  // }
}
// .pipe(
//   catchError((error) => {
//     return throwError(() => {
//       let message = '';
//       if (error.status === 404) {
//         message = ' non ho trovato nulla ';
//       } else if (error.status === 500) {
//         message = ' errore nella richiesta ';
//       }
//       return message;
//     });
//   })
// );

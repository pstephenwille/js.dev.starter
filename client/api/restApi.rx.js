import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/toPromise';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function load(method, userUrl) {
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        let onLoad = () => {
            if(xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        };

        xhr.onload = onLoad;
        xhr.open(method, baseUrl + userUrl);
        xhr.send();

        return () => {
            /* unsubscribe */
            xhr.removeEventListener("load", onLoad);
            xhr.abort();
        }

    }).retryWhen(retryStrategy({attempts: 3, delay: 500}));
}

function retryStrategy({attempts = 2, delay = 1000} = {}) {
    return function (errors) {
        return errors
            .scan((acc, value) => {
                acc += 1;
                if(acc < attempts) {
                    return acc;
                }
                else {
                    /* O.scan uses a try catch allowing this error to be a returned value,
                     * instead of breaking the app */
                    throw new Error(value);
                }
            }, 0)
            .delay(delay);
    }
}

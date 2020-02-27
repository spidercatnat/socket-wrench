import { ReplaySubject } from "rxjs";
/** TODO:
 *  - Ensure singularity by converting into a true singleton class
 */

const subject = new ReplaySubject();

export const publisher = {
  sendMessage: (topic, data) => {
    subject.next({ topic, data });
  },
  getMessage: () => subject.asObservable()
};

let rxHttp = (rx) => {
  "ngInject";

  let create = ($http) => {
    return rx.Observable.fromPromise($http);
  }

  return {create};
}

export default rxHttp;
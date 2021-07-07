export const responseActions = (store, response) => {
  store.setState({ response: response.data, progress: response.progress });
};

export const loadingActions = (store, status) => {
  store.setState({ loading: status });
};

export const workerActions = (store, workerId) => {
  store.setState({ workerId: workerId });
};

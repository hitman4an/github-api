
export function listHasErrored(bool) {
    return {
        type: 'LIST_HAS_ERRORED',
        hasErrored: bool
    };
}

export function listIsLoading(bool) {
    return {
        type: 'LIST_IS_LOADING',
        isLoading: bool
    };
}

export function listLoaded(items) {
    return {
        type: 'LIST_LOADED',
        items
    };
}

export function langHasErrored(bool) {
  return {
      type: 'LANG_HAS_ERRORED',
      hasErrored: bool
  };
}

export function langIsLoading(bool) {
  return {
      type: 'LANG_IS_LOADING',
      isLoading: bool
  };
}

export function langLoaded(items) {
  return {
      type: 'LANG_LOADED',
      items
  };
}

export function getNewFilter(value) {
  return {
      type: 'FILTER_CHANGED',
      value
  }  
}

export function getNewSort() {
  return {
      type: 'SORT_CHANGED',
  }  
}

export function getList(url) {

    return (dispatch) => {
      dispatch(listIsLoading(true));
        
    fetch(url)
     .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(listIsLoading(false));

      return response;
      
    })
      .then(response => response.json())
      .then(items => dispatch(listLoaded(items)))
      .catch(() => dispatch(listHasErrored(true)));
    };
  }

  export function getLanguages(url) {

    return (dispatch) => {
      dispatch(langIsLoading(true));
        
    fetch(url)
     .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(langIsLoading(false));

      return response;
      
    })
      .then(response => response.json())
      .then(items => dispatch(langLoaded(items)))
      .catch(() => dispatch(langHasErrored(true)));
    };
  }


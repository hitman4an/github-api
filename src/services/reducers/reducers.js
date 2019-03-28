
export function ListHasErrored(state = false, action) {
  switch (action.type) {
      case 'LIST_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function ListIsLoading(state = false, action) {
  switch (action.type) {
      case 'LIST_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export function List(state = [], action) {
  switch (action.type) {
      case 'LIST_LOADED':
          return action.items.items;

      default:
          return state;
  }
}

export function LanguageHasErrored(state = false, action) {
  switch (action.type) {
      case 'LANG_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function LanguageIsLoading(state = false, action) {
  switch (action.type) {
      case 'LANG_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export function Languages(state = [], action) {
  switch (action.type) {
      case 'LANG_LOADED':
          return action.items;

      default:
          return state;
  }
}

export function ChangeFilter(state="", action) {
  switch (action.type) {
      case 'FILTER_CHANGED':
          return action.value;
      
      default:
          return state;
  }
}

export function ChangeSort(state=false, action) {
  switch (action.type) {
      case 'SORT_CHANGED':
          return !state;
      
      default:
          return state;
  }
}
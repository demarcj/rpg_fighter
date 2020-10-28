import * as actionTypes from "./actionTypes"

export const addArticle = (article: IArticle) => {
  const action: ArticleAction = {
    type: actionTypes.attack,
    article
  }
  return action;
}

export const removeArticle = (article: IArticle) => {
  const action: ArticleAction = {
    type: actionTypes.heal,
    article
  }
  return action;
}

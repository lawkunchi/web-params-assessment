import { Actions } from 'react-native-router-flux';
import {
      QUIZ_MAIN_MENU,
      QUIZ_SELECT_OPTIONS_GAME,
      QUIZ_START_GAME,
      QUIZ_FETCH_CATEGORIES_SUCCESS,
      QUIZ_FETCH_SUCCESS,
      QUIZ_FETCH_ERROR,
      QUIZ_NEXT_QUESTION,
      QUIZ_GAME_OVER,
      QUIZ_START_ATTEMPT,
      QUIZ_ATTEMPT_OVER,
      QUIZ_SELECT_OPTIONS_ATTEMPT,
      QUIZ_ATTEMPT_DB_FETCH,
      QUIZ_ATTEMPT_DB_SAVE
}    from './types';
import { shuffleArray } from '../Utils';
import * as TriviaAPI from '../TriviaAPI';

// import db from '../firebase.config';


export const categoryFetch = () => {
  
      return (dispatch) => {
            TriviaAPI.getCategories().then((categories) => {
                  categories = categories.map(
                        category => {
                              return {
                                    label: category.name,
                                    value: category.id
                              }
                        }
                  );

                  dispatch({ type: QUIZ_FETCH_CATEGORIES_SUCCESS, payload: categories });

                  }).catch(function () {
                        dispatch({ type: QUIZ_FETCH_ERROR });
            });
        }
};

export const quizFetch = (selectedCategoryId, numberOfQuestions) => {
  
      return (dispatch) => {
            TriviaAPI.getQuestions(numberOfQuestions, selectedCategoryId).then((questions) => {

                  const formatedQuestions = questions.map(
                        question => {
                              let options = question.incorrectAnswers;
                              options.push(question.correctAnswer);
                              options = shuffleArray(options);

                              return {
                                    options: question.incorrectAnswers,
                                    category: question.category,
                                    correct_answer: question.correctAnswer,
                                    question: question.question
                            }
                        }
                  );

                  dispatch({ type: QUIZ_FETCH_SUCCESS, payload: formatedQuestions });
            }).catch(function () {
                  dispatch({ type: QUIZ_FETCH_ERROR });
            });
      }
};


export const nextQuestion = (currentAnswer, currentQuestionIndex, questions, totalScore) => {

      return (dispatch) => {
            const nextIndex = currentQuestionIndex + 1;
            let totalQuestionsSize = questions.length;

          if (currentAnswer === questions[currentQuestionIndex].correct_answer) {
            totalScore += 1;
          }

          if (nextIndex < totalQuestionsSize) {
            dispatch({ type: QUIZ_NEXT_QUESTION, payload: { currentQuestionIndex: nextIndex, totalScore } });
          }
          else {
            console.log(totalScore);
            dispatch({ type: QUIZ_ATTEMPT_OVER, payload: totalScore });
            Actions.scoreBoard({ type: 'reset' });
          }
      }
};


export const startQuizAttempt = (categoryId, numberOfQuestions) => {
      return (dispatch) => {
            dispatch({ type: QUIZ_START_ATTEMPT, payload: { categoryId, numberOfQuestions } });
             Actions.quizAttempt({ type: 'reset' });
      }
};


export const startQuizSelection = () => {
  
      return (dispatch) => {
            dispatch({ type: QUIZ_SELECT_OPTIONS_ATTEMPT });
            Actions.categorySelection({ type: 'reset' });
      }
};


export const goToMainMenu = () => {
  
  return (dispatch) => {
    dispatch({ type: QUIZ_MAIN_MENU });
    Actions.mainMenu({ type: 'reset' });
  }
};

export const goToScoreBoard = () => {
      return (dispatch) => {
            dispatch({ type: QUIZ_ATTEMPT_OVER });
            Actions.scoreBoard({ type: 'reset' });
      }
};


/*export const quizAttemptFetch = () => {

      const response = db.collection('QuizAttemps');
      const data = response.data;

      db.ref('/quizAttempt').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let quizAttempts = {...data};
      });

      return (dispatch) => {
          dispatch({ type: QUIZ_ATTEMPT_DB_FETCH, payload: quizAttempts });
          Actions.fetchQuizAttempts({ type: 'reset' });
        }
}

export const quizAttemptSaveToDB = (categoryId, totalScore) => {

      const dataToSave = {
            "category": categoryId,
            "totalScore": totalScore,
            "time": (new Date).getTime(),
      };

      db.ref('/quizAttempt').push(dataToSave);

      return (dispatch) => {
          dispatch({ type: QUIZ_ATTEMPT_DB_SAVE});
          Actions.saveAttemptToDb({ type: 'reset' });
      }
}*/
import {
      QUIZ_MAIN_MENU,
      QUIZ_SELECT_OPTIONS_ATTEMPT,
      QUIZ_START_ATTEMPT,
      QUIZ_FETCH_CATEGORIES_SUCCESS,
      QUIZ_FETCH_SUCCESS,
      QUIZ_FETCH_ERROR,
      QUIZ_NEXT_QUESTION,
      QUIZ_ATTEMPT_OVER,
      QUIZ_ATTEMPT_DB_SAVE,
      QUIZ_ATTEMPT_DB_FETCH,
      QUIZ_ATTEMPT_BOARD
} from '../actions/types';

const INITIAL_STATE = {
      questions: [{
            category: '',
            correct_answer: '',
            incorrect_answers: [],
            options: [],
            question: '',
            type: 'boolean',
      }],
      currentQuestionIndex:  0,
      totalScore: 0,
      error: true,
      categories: [{
            label: '',
            value: -1
      }],
      selectedCategoryId: -1,
      numberOfQuestions: 10,
      quizAttempts: []
};

export default (state = INITIAL_STATE, action) => {
      
      switch (action.type) {
            case QUIZ_MAIN_MENU:
                  return INITIAL_STATE;

            case QUIZ_SELECT_OPTIONS_ATTEMPT:
                  return INITIAL_STATE;
            case QUIZ_ATTEMPT_BOARD:
                   return INITIAL_STATE;

            case QUIZ_START_ATTEMPT:
                  return { 
                        ...state,
                        selectedCategoryId: (action.payload.categoryId) ? action.payload.categoryId : state.selectedCategoryId,
                        numberOfQuestions: (action.payload.numberOfQuestions) ? action.payload.numberOfQuestions: state.numberOfQuestions,
                        currentQuestionIndex: 0,
                        totalScore: 0,
                        loading: true,
                  };

            case QUIZ_FETCH_CATEGORIES_SUCCESS:
                  return { 
                        ...state,
                        categories: action.payload,
                        loading: false,
                        error: '',  
                  };

            case QUIZ_FETCH_SUCCESS:
                  return { 
                         ...state, 
                        questions: action.payload, 
                        totalQuestionsSize: action.payload.length,
                        loading: false,
                        error: '',  
                  };

            case QUIZ_FETCH_ERROR:
                  return { 
                        ...state, 
                        loading: false,
                        error: true,
                  };

            case QUIZ_NEXT_QUESTION:
                  return { 
                        ...state, 
                        currentQuestionIndex: action.payload.currentQuestionIndex,
                        totalScore: action.payload.totalScore,
                  };

            case QUIZ_ATTEMPT_OVER:
                  return { 
                        ...state, 
                        totalScore: action.payload,
                  };
            case QUIZ_ATTEMPT_DB_FETCH: 
                  return {
                        ...state,
                        quizAttempts: action.payload.quizAttempts,
                  };
            case QUIZ_ATTEMPT_DB_SAVE:
                  return {
                        ...state
                  };
            default:
                  return state;
      }
};
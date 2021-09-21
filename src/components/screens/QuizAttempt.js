import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Audio } from 'expo';
import Question from '../Question';
import * as actions from '../../actions';
import { scale, moderateScale } from '../../Scaling';



const COUNTDOWN_TIME = 10;

/**
 * @description	Trivia Game Screen.
 * @constructor
 */
class TriviaGame extends React.Component {

  constructor(props){
		super(props);
		this.state = {
      answerStatus: false,
      answerType: 'correct',
      fontLoaded: false,
      countdownTime: COUNTDOWN_TIME,
      soundController: null,
		};
  }

 
  componentWillMount() {
    const { selectedCategoryId} = this.props;
    this.props.quizFetch(
      selectedCategoryId, 10
    );
  }

  async componentDidMount() {
    // Preload sound controller
   
  }

  handleAnswerSelection = (questionOption) => {
    if(this.state.answerStatus) return;
    const {
      currentQuestionIndex,
      currentQuestion,
      questions,
      nextQuestion,
      totalScore
    } = this.props;

     this.props.nextQuestion(
        questionOption,
        currentQuestionIndex,
        questions,
        totalScore
      );
    

  };

  render() {
    const {
      currentQuestionNumber,
      currentQuestion,
      questions,
      totalQuestionsSize,
    } = this.props;

      return (
     
            <View style={styles.container}>
                  <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>Question {currentQuestionNumber}/{totalQuestionsSize}</Text>
                        <Text style={styles.categoryText}>{this.props.selectedCategory}</Text>
                  </View>
                  <Question
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        type={currentQuestion.type}
                        difficulty={currentQuestion.difficulty}
                        category={currentQuestion.category}
                        onItemSelected={this.handleAnswerSelection}
                  />
          </View>
    );
  }
}

/**
 * TriviaScreen component StyleSheet.
 */
const styles = StyleSheet.create({
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  },
  noDataContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    paddingTop: 0,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  answerStatus: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 9999
  },
  noDataText: {
    fontSize: moderateScale(20),
    padding: scale(10),
    textAlign: 'justify',
  },
  container: {
    flex: 1,
    paddingTop: 0,
  },
  headerContainer: {
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: scale(24),
    paddingLeft: scale(24),
    paddingTop: scale(12),
    paddingBottom: scale(12),
    backgroundColor: '#00BCD4',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#ffffff',
    margin: scale(8),
    marginTop: scale(36),
  },
  headerTitle: {
    fontWeight: '300',
    color: '#ffffff',
    fontSize: moderateScale(28),
    fontWeight: '900',
  },
  categoryText: {
    fontWeight: '300',
    color: '#ffffff',
    fontSize: moderateScale(18),
    fontWeight: '900',
  },
});

const mapStateToProps = ({ trivia }) => {
  const { 
    categories,
    currentQuestionIndex,
    error,
    loading,
    questions,
    totalScore,
    selectedCategoryId,
    selectedDifficulty,
    numberOfQuestions
  } = trivia;

  // console.log(questions[currentQuestionIndex]);

  return {
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionNumber: currentQuestionIndex + 1,
    selectedCategory: categories.filter(category => category.value === selectedCategoryId)[0].label,
    totalQuestionsSize: questions.length,
    currentQuestionIndex,
    error,
    loading,
    numberOfQuestions,
    questions,
    totalScore,
    selectedCategoryId,
    selectedDifficulty,
  };
};

export default connect(mapStateToProps,
  actions
)(TriviaGame);
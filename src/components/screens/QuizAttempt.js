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


class QuizAttempt extends React.Component {

  constructor(props){
		super(props);
  }

 
  componentWillMount() {
    const { selectedCategoryId} = this.props;
    this.props.quizFetch(
      selectedCategoryId, 10
    );
  }

  async componentDidMount() {
   
  }

  handleAnswerSelection = (questionOption) => {
    // if(this.state.answerStatus) return;
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
                        category={currentQuestion.category}
                        onItemSelected={this.handleAnswerSelection}
                  />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  headerContainer: {
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

const mapStateToProps = ({ quiz }) => {
  const { 
    categories,
    currentQuestionIndex,
    error,
    loading,
    questions,
    totalScore,
    selectedCategoryId,
    numberOfQuestions
  } = quiz;


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
  };
};

export default connect(mapStateToProps,
  actions
)(QuizAttempt);
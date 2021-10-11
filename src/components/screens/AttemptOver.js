import React from 'react';
import {
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../Button';
import { connect } from 'react-redux';
import { scale, moderateScale } from '../../Scaling';
import * as actions from '../../actions';


class AttemptOver extends React.Component {

      constructor(props){
		super(props);
      }
  
      async componentDidMount() {
    
      }

      componentWillMount() {
          this.props.quizAttemptSaveToDB(this.props.quiz.selectedCategoryId, this.props.quiz.totalScore);
      }


      render() {
            return (
                  <View style={styles.container}>
                        <View style={styles.headerContainer}>
                              {/*<Text style={styles.headerTitle}>Question {currentQuestionNumber}/{totalQuestionsSize}</Text>*/}
                              <Text style={styles.categoryText}>SCORE: {this.props.quiz.totalScore}</Text>
                        </View>

                        <View style={styles.container}>
                              <Button  onPress={this.props.startQuizSelection}>
                                    Retake
                              </Button>

                              <Button  onPress={this.props.goToScoreBoard}>
                                    Score Board
                              </Button>
                        </View>
                  </View>
            )
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

const mapStateToProps = (state) => {
      return state;
};

export default connect(mapStateToProps, actions)(AttemptOver);
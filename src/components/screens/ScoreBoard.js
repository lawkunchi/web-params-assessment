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
// import { quizAttemptSaveToDB } from '../../actions';


class ScoreBoard extends React.Component {

      constructor(props){
		super(props);
      }
  
      async componentDidMount() {
    
      }

      componentWillMount() {
          // this.props.quizAttemptSaveToDB(this.props.quiz.categotyId, this.props.quiz.totalScore);
      }


      render() {
            return (
                  <View>
                        <Text> SCORE : {this.props.quiz.totalScore} </Text>
                  </View>
            )
      }
}

const mapStateToProps = (state) => {
      return state;
};

export default connect(mapStateToProps)(ScoreBoard);
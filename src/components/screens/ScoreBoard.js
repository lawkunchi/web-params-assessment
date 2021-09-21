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
import { startQuizSelection } from '../../actions';
import { quizAttemptsFetch } from '../../actions';


class ScoreBoard extends React.Component {

      constructor(props){
		super(props);
      }
  
      async componentDidMount() {
    
      }

      componentWillMount() {
          this.props.quizAttemptSave(this.props.trivia.categotyId, this.props.trivia.totalScore);
      }


      render() {
            return (
                  <View>
                        <Text> SCORE : {this.props.trivia.totalScore} </Text>
                  </View>
            )
      }
}

const mapStateToProps = (state) => {
      return state;
};

export default connect(mapStateToProps)(ScoreBoard);
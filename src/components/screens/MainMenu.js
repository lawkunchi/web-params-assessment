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
import { scoreBoard } from '../../actions';

class MainMenu extends React.Component {

      constructor(props){
		super(props);
      }

      componentWillMount() {
          this.props.quizAttemptFetch();
        }
  
      async componentDidMount() {
      
      }

      render() {
            return (
                  <View>
                        <Text> TRIVIA QUIZ </Text>
                        <Button  onPress={this.props.startQuizSelection}>
                              Start
                        </Button>

                        <Button  onPress={this.props.scoreBoard}>
                              Score Board
                        </Button>
                  </View>
            )
      }
}

const mapStateToProps = (state) => {
      return state;
};

export default connect(mapStateToProps)(MainMenu);
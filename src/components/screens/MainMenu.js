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
import { startQuizSelection, goToScoreBoard} from '../../actions';
import { scale, moderateScale, verticalScale} from '../../Scaling';
class MainMenu extends React.Component {

      constructor(props){
		super(props);
      }

      componentWillMount() {
          // this.props.quizAttemptFetch();
        }
  
      async componentDidMount() {
      
      }

      render() {
            return (
                  <View style={styles.container}>
                        <View style={styles.titleContainer}>
                              <Text style={styles.title}> TRIVIA QUIZ </Text>
                        </View>
                        <Button  onPress={this.props.startQuizSelection}>
                              Start
                        </Button>

                        <Button  onPress={this.props.goToScoreBoard}>
                              Score Board
                        </Button>
                  </View>
            )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    flex: 1,
    marginTop: scale(60),
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: "game-title",
    color: '#000000',
    fontSize: moderateScale(50)
  },
});


const mapStateToProps = (state) => {
      return state;
};

export default connect(mapStateToProps, { startQuizSelection, goToScoreBoard })(MainMenu);
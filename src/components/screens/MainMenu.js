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
import { scale, moderateScale} from '../../Scaling';
class MainMenu extends React.Component {

      constructor(props){
		super(props);
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

                        <Button  onPress={() => console.log(this.props.navigation.navigate('scoreBoard'))}>
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
    marginTop: scale(60),
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginBottom: scale(250)
  },
  title: {
    color: '#000000',
    fontSize: moderateScale(50)
  },
});


const mapStateToProps = (state) => {
      return state;
};

export default connect(mapStateToProps, { startQuizSelection, goToScoreBoard })(MainMenu);
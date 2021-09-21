import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Font } from 'expo';
import Button from '../Button';
import * as actions from '../../actions';
import { scale, moderateScale, verticalScale} from '../../Scaling';


/**
 * @description	Trivia setup page screen.
 * @constructor
 */
class CategorySelection extends React.Component {

  constructor() {
    super()

    
    this.state = {
      selectedCategoryId: -1,
      fontLoaded: false
    }		
  }


  componentWillMount() {
    this.props.categoryFetch();
  }

  async componentDidMount() {
    
  }

  handleCategorySelect = (value) => {
    this.setState({ selectedCategoryId: value });
  }

 
  handleStartQuiz = () => {
    const { selectedCategoryId } = this.state;
    this.props.startQuizAttempt(
      selectedCategoryId, 
      10
    );
  }

  render() {
    return (
      
        <View style={styles.container}>
         
          <View style={styles.Separator} />
          <Text style={styles.headerText}> Select Category</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            placeholder={{}}
            value={this.state.selectedCategoryId}
            items={this.props.categories}
            onValueChange={this.handleCategorySelect}
          />
         
          <View style={styles.Separator} />
          <Button onPress={this.handleStartQuiz}>
            Start Quiz
            </Button>
        </View>
    );
  }
}

/* TriviaSelection StyleSheet */
const styles = StyleSheet.create({
  gameTitle: {
    fontFamily: 'select-font',
    color: '#000000',
    fontSize: moderateScale(60)
  },
  gameTitleContainer: {
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFFDD',
    width: '100%',
    height: '100%'
  },
  parentContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  tabViewText: {
    color: '#444444',
    fontWeight: 'bold',
    marginTop: scale(50),
    fontSize: moderateScale(18),
  },
  titleText: {
    color: '#444444',
    padding: scale(20),
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  headerText: {
    fontFamily: 'select-font',
    padding: scale(8),
    fontSize: moderateScale(24),
    color: '#444444',
  },
  tabContent: {
    color: '#444444',
    fontSize: scale(18),
    margin: scale(24),
  },
  Separator: {
    marginHorizontal: scale(-10),
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: scale(24),
  },
  tabStyle: {
    borderColor: '#D52C43',
    paddingHorizontal: scale(10),
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
  tabTextStyle: {
    color: '#D52C43',
  },
});

/* RNPickerSelect StyleSheet */
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: scale(24),
      textAlign: 'center',
      fontWeight: "900",
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const mapStateToProps = ({ trivia }) => {
  const { error, loading, categories } = trivia;

  return {
    error,
    loading,
    categories
  };
};

export default connect(mapStateToProps,
  actions
)(CategorySelection);
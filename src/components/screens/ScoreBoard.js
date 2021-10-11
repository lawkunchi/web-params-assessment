import React from 'react';
import {
	StyleSheet,
	Text,
	View,FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { scale, moderateScale} from '../../Scaling';
import * as actions from '../../actions';
import db from '../../firebase.config';
import Moment from 'moment';


class ScoreBoard extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			tableData: null,
		}		

	}

	UNSAFE_componentWillMount() {
		db.ref('/attempts').on('value', querySnapShot => {
              let data = querySnapShot.val() ? querySnapShot.val() : {};

			  const quizAttempts = [];

			  Object.keys(data).forEach(function(key) {
				quizAttempts.push(data[key]);
			  });
              this.setState({
              	tableData: quizAttempts,
            });
        });


	}


	render() {
		const friends = this.state.tableData;
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.categoryText}>SCORE BOARD</Text>
				</View>
				
				{this.state.tableData == null ? <Text>No Attempts Found</Text> : 
				<View>
						<FlatList 
						keyExtractor = {(data) => data.time}
						data ={friends}
						renderItem={({item}) => {
							console.log(item.category);
							return (
								<View style={styles.item}>
									<Text style={styles.title}>Category: {item.category}</Text>
									<Text style={styles.title}>Attempt Date: {Moment(item.time).format('d MMM')}</Text>
									<Text >Total Score: {item.totalScore}</Text>
								</View>
							);
						}}
					/>
				</View>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 0,
	},
	tableContainer: { 
		flex: 1, 
		padding: 16, 
		paddingTop: 30, 
		backgroundColor: '#fff' 
	},
  	tableHead: { 
  		height: 40, 
  		backgroundColor: '#f1f8ff' 
  	},
  	tableText: { 
  		margin: 6 
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

	  item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	  },
	  title: {
		textTransform: 'capitalize',
	  },
	});

const mapStateToProps = ({ quiz }) => {
  const { quizAttempts } = quiz;

  return {
    quizAttempts
  };
};



export default connect(mapStateToProps, actions)(ScoreBoard);
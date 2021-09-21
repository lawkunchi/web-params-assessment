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
import { scale, moderateScale, verticalScale} from '../../Scaling';
import * as actions from '../../actions';
import { Table, Row, Rows } from 'react-native-table-component';
import db from '../../firebase.config';


class ScoreBoard extends React.Component {

	constructor(props){
		super(props);

		this.state = {
	      tableHead: ['Category', 'Score', 'Time'],
	      tableData: []
	    }
	}

	async componentDidMount() {
		console.log(this.props.quizAttempts, 'aytsdsdio');

	}

	componentWillMount() {
		// this.props.quizAttemptFetch();
		db.ref('/attempts').on('value', querySnapShot => {
              let data = querySnapShot.val() ? querySnapShot.val() : {};
              const quizAttempts = {...data};
              this.setState({
              	tableData: quizAttempts,
            });
        });

	}


	render() {
		let quizAttempts = ["dsd", "dsds"];
		const state = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<Text style={styles.categoryText}>SCORE BOARD</Text>
				</View>

				<View style={styles.tableContainer}>
		        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
		          <Row data={state.tableHead} style={styles.tableText} textStyle={styles.tableText}/>
		          <Rows data={state.tableData} textStyle={styles.tableText}/>
		        </Table>
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
});

const mapStateToProps = ({ quiz }) => {
  const { quizAttempts } = quiz;

  return {
    quizAttempts
  };
};



export default connect(mapStateToProps, actions)(ScoreBoard);
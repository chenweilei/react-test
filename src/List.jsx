import React ,{Component} from 'react'
import ListLogin from './ListLogin'
import ListSearch from './ListSearch'
import ListCont from './ListCont'

import './List.css'


export default class List extends Component{
	constructor(props){
		super(props)
		this.state = {
			_userName: 'cwl',
			_passWord: '123',
			userName: '',
			passWord: '',
			isLogined: false,
			listdata: [],
			curShowId: null
		};
	}
	componentWillMount(){
		console.log('parent: componentWillMount')
		fetch('/data.json')
			.then( res => res.json() )
			.then( data => { 
				console.log(data)
				this.setState({
					listdata: data
				})
			} )
	}	
	componentDidMount(){
		let username = localStorage.getItem('userName') || '';
		let password = localStorage.getItem('password') || '';
		console.log('parent: componentDidMount')
		this.setState({
			userName: username,
			passWord: password
		}, () => {
			this.loginEnter();
		})
	}
	handleChange(name, value){
		//console.log(name, value)
		this.setState({
			[name]: value
		})
	}
	handleClickSearch(id){
		console.log(id)
		this.setState({
			curShowId: id
		})
	}
	handleCancel(){
		this.setState({
			curShowId: null
		})
	}
	loginEnter(){
		if(this.state._userName === this.state.userName && this.state._passWord === this.state.passWord){
			this.setState({
				isLogined: true
			})
			localStorage.setItem('userName', this.state.userName)
			localStorage.setItem('password', this.state.passWord)
		}	
	}
	render(){
		return (
			<div>
				<h2>列表页</h2>
				<div>
					{
						this.state.isLogined ? 
						(<div>
							<ListSearch 
								listdata={this.state.listdata} 
								onClickSearch={this.handleClickSearch.bind(this)}
								onClickCancel={this.handleCancel.bind(this)}
							></ListSearch>
							<ListCont searchShowId={this.state.curShowId} list={this.state.listdata}></ListCont>
						</div>):
						<ListLogin 
							userName={this.state.userName} 
							passWord={this.state.passWord}
							onChange={this.handleChange.bind(this)}
							loginEnter={this.loginEnter.bind(this)}
						></ListLogin>
					}
				</div>
			</div>
				
		)
	}
}
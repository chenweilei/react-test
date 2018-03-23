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
			isLogined: false
		};
	}
	handleChange(name, value){
		//console.log(name, value)
		this.setState({
			[name]: value
		})
	}
	loginEnter(){
		if(this.state._userName === this.state.userName && this.state._passWord === this.state.passWord){
			this.setState({
				isLogined: true
			})
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
							<ListSearch></ListSearch>
							<ListCont></ListCont>
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
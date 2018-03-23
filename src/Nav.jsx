import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import ico from "./icon_tabbar.png"

export default class Nav extends Component{
	constructor(props){
		super(props)
		this.state = {
			nav: [
				{
					link: '/',
					txt: '首页'
				},
				{
					link: '/kuaidi',
					txt: '快递查询'
				},
				{
					link: '/list',
					txt: '列表'
				},
			],
			cur: '/'
		}
	}
	componentDidMount(){
		this.setState({
			cur: window.location.pathname
		})
	}
	onClick(link){
		this.setState({
			cur: link
		})
	}
	getLinkList(){

		return this.state.nav.map( (val, key) => {
			let {link, txt} = val;
			return (
				<Link key={key} onClick={this.onClick.bind(this, link)} to={link} className={`weui-tabbar__item ${this.state.cur==link?'weui-bar__item_on':null}`}>
					<img src={ico} alt="" className="weui-tabbar__icon" />
					<p className="weui-tabbar__label">{txt}</p>
				</Link>
			)
		})

	}
	render(){
		return (
			<div>
				<div className="weui-tabbar">
					{this.getLinkList()}
				</div>
			</div>
		)
	}
}